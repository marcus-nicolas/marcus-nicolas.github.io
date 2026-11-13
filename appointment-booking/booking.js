const bookingForm = document.querySelector("#booking-form");
const dateButtons = document.querySelectorAll(".date-option");
const timeButtons = document.querySelectorAll(".time-option");
const summary = document.querySelector("#booking-summary");
const formContent = document.querySelector("#booking-form-content");
const confirmation = document.querySelector("#booking-confirmation");
const bookingDate = { value: document.querySelector(".date-option[aria-pressed='true']")?.dataset.date ?? "Tue, Nov 10" };
const bookingTime = { value: document.querySelector(".time-option[aria-pressed='true']")?.dataset.time ?? "10:00 AM" };
const patientName = document.querySelector("#patient-name");
const patientEmail = document.querySelector("#patient-email");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function updateSummary() {
  summary.replaceChildren("Your visit: ");
  for (const value of [bookingDate.value, bookingTime.value, "Dr. Maya Santos"]) {
    const strong = document.createElement("strong");
    strong.textContent = value;
    summary.append(strong);
    if (value !== "Dr. Maya Santos") summary.append(" ");
    else summary.append(".");
  }
}

dateButtons.forEach((button) => {
  button.addEventListener("click", () => {
    bookingDate.value = button.dataset.date;
    dateButtons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
    updateSummary();
  });
});

patientName.addEventListener("input", () => {
  if (patientName.getAttribute("aria-invalid") === "true" && patientName.value.trim()) setFieldError(patientName, "");
});

patientEmail.addEventListener("input", () => {
  if (patientEmail.getAttribute("aria-invalid") !== "true") return;
  const value = patientEmail.value.trim();
  setFieldError(patientEmail, !value ? "Enter an email address for the confirmation." : emailPattern.test(value) ? "" : "Enter an email address in the format name@example.com.");
});

timeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    bookingTime.value = button.dataset.time;
    timeButtons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
    updateSummary();
  });
});

function setFieldError(input, message) {
  const error = document.querySelector(`#${input.id === "patient-name" ? "name" : "email"}-error`);
  error.textContent = message;
  input.setAttribute("aria-invalid", String(Boolean(message)));
}

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = patientName;
  const email = patientEmail;
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const validEmail = emailPattern.test(emailValue);

  setFieldError(name, nameValue ? "" : "Enter your name to continue.");
  setFieldError(email, validEmail ? "" : emailValue ? "Enter an email address in the format name@example.com." : "Enter an email address for the confirmation.");
  const firstInvalid = bookingForm.querySelector("[aria-invalid='true']");
  if (firstInvalid) {
    firstInvalid.focus();
    return;
  }

  document.querySelector("#step-count").textContent = "COMPLETE · CONCEPT";
  document.querySelectorAll(".booking-progress span").forEach((step) => step.classList.add("is-done"));
  formContent.hidden = true;
  confirmation.classList.add("is-visible");
  document.querySelector("#confirmation-greeting").textContent = `Thanks, ${nameValue}. This is a sample confirmation; no appointment was booked.`;
  const details = document.querySelector("#confirmation-details");
  details.replaceChildren();
  const lines = [
    ["Provider", "Dr. Maya Santos · General Medicine"],
    ["Date", bookingDate.value],
    ["Time", bookingTime.value],
    ["Email", emailValue],
  ];
  lines.forEach(([label, value], index) => {
    if (index) details.append(document.createElement("br"));
    const strong = document.createElement("strong");
    strong.textContent = `${label}: `;
    details.append(strong, document.createTextNode(value));
  });
  confirmation.focus();
});

document.querySelector("#booking-reset").addEventListener("click", () => {
  bookingForm.reset();
  document.querySelectorAll("[aria-invalid]").forEach((input) => input.removeAttribute("aria-invalid"));
  document.querySelectorAll(".field-error").forEach((error) => { error.textContent = ""; });
  dateButtons.forEach((button, index) => button.setAttribute("aria-pressed", String(index === 0)));
  timeButtons.forEach((button, index) => button.setAttribute("aria-pressed", String(index === 1)));
  bookingDate.value = dateButtons[0].dataset.date;
  bookingTime.value = timeButtons[1].dataset.time;
  document.querySelector("#step-count").textContent = "STEP 1 OF 4";
  document.querySelectorAll(".booking-progress span").forEach((step, index) => step.classList.toggle("is-done", index === 0));
  confirmation.classList.remove("is-visible");
  formContent.hidden = false;
  updateSummary();
  document.querySelector("#patient-name").focus();
});
