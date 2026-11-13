const rangeButtons = document.querySelectorAll("[data-range]");
const scheduleItems = document.querySelectorAll(".schedule-item");

rangeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const range = button.dataset.range;
    rangeButtons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
    scheduleItems.forEach((item) => {
      item.hidden = range === "today" ? item.dataset.day !== "today" : item.dataset.day === "today";
    });
  });
});

const noticeDismiss = document.querySelector(".notice-dismiss");
noticeDismiss?.addEventListener("click", () => {
  const notice = document.querySelector("#notice");
  notice?.remove();
});
