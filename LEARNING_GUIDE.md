# Learning guide — Fieldnotes portfolio

Use this project as a set of examples to inspect and change. The aim is to understand the choices, then make your own improvements—not just copy a finished screen.

## Start with the portfolio page

Open `index.html` and follow the structure in the browser page back to `index.html`:

- `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>` describe the page regions.
- Each section has a heading, and project links point to full case studies.
- CSS custom properties near the top of `styles.css` hold the colors and type styles. Change one token there to see the identity update consistently.
- CSS Grid builds the large-screen layouts; media queries stack and simplify them on smaller screens.
- `script.js` only handles behavior that needs JavaScript: the small-screen menu and current year.

## Student Portal

Open `student-portal/index.html` and compare the responsive dashboard layout with `student-portal/WIREFRAME_SPEC.md` and `student-portal/figma-wireframes.svg`.

- The cards are ordinary HTML elements with headings and labels. Their order in the document is also the mobile reading order.
- The “Today / This week” control uses button `aria-pressed` states. `portal.js` filters schedule rows and keeps the controls in sync.
- The notice close button removes one sample notice from the current page. It does not save that preference.
- The concept is intentionally labeled as unvalidated. You can practice by asking a few students to find the next class and nearest deadline, then recording what actually happened before changing the design.

## Appointment Booking

Open `appointment-booking/index.html` and inspect `appointment-booking/booking.js`.

- Date and time are buttons. The selected option is exposed with `aria-pressed`, so the state is not communicated only by color.
- The form uses explicit labels, `autocomplete` hints, field-level messages, and focus on the first invalid field.
- A valid submit updates the confirmation locally. It never sends a request or stores personal information.
- Try changing the selected date and time, submitting an empty form, entering a malformed email, and completing the flow with sample details. Then inspect the event handlers that caused each state.

## Small front-end practice tasks

1. Change a color token and check the contrast of text and controls against its background.
2. Add a “no classes today” state to the student dashboard and make the schedule area explain what the student can do next.
3. Add one unavailable appointment time and communicate that it cannot be selected without relying on a color change alone.
4. Change a heading or paragraph in the HTML, then check that the mobile layout still reads in a sensible order.
5. Make a small design decision, write why you made it, and note what evidence could prove or disprove your assumption.

## Before calling a project portfolio-ready

- Replace fictional sample content with clearly labeled concept content or your own approved material.
- Add the research or feedback you actually conducted; leave results out if you have not gathered them.
- Explain your own role and contributions.
- Add your display name and working contact details to the portfolio.
- Decide whether the visual decisions and project language feel like you.
