# Student Portal Dashboard Redesign

**Status:** Draft brief — direction agreed  
**Project type:** Self-initiated UI/UX case study  
**Product:** Fictional university student portal

## Project summary

Redesign the student portal dashboard to help students quickly understand what needs their attention today: their next class, upcoming deadlines, and important notices. The project will cover a responsive dashboard experience and explain the design decisions behind it.

This is a portfolio concept, not commissioned work. The problem below is a starting hypothesis; it has not been validated with students or portal analytics.

## Starting problem hypothesis

Students may need to visit several parts of a portal to answer basic questions like “Where do I need to be next?” and “What is due soon?” When those details are scattered or presented with equal visual weight, it can take longer to decide what to do next.

## Primary audience

Broad university student audience who use a web portal on both a laptop and a phone to check their schedule, coursework deadlines, and campus announcements. Their needs and constraints will be treated as assumptions until tested.

## Design challenge

How might the dashboard make a student’s next class and nearest deadlines easy to find, while keeping secondary information available without competing for attention?

## Primary user task

Open the dashboard and quickly find:

1. The next scheduled class, including time and location.
2. The nearest upcoming coursework deadline.
3. Any important notice that could affect today’s plans.

## Proposed first release scope

- A dashboard overview with clear information hierarchy.
- A “Next class” card with course, time, location, and a relevant action.
- A short upcoming-deadlines list with dates and status.
- A compact announcements area with priority and date.
- Responsive layouts for desktop and mobile widths.
- At least one useful alternate state, such as no classes today or no upcoming deadlines.
- A brief rationale connecting layout and interaction decisions to the stated user task.

## Out of scope for this case study

- Rebuilding the full university portal or its backend.
- Course registration, grades, payments, messaging, or admin tools.
- Claiming measured improvements without usability testing or analytics.

## Visual direction

Minimalist with a subtle campus character: warm paper neutrals, deep campus green, and restrained orange accents. Serif headings add a little editorial warmth; clear sans-serif body text and compact mono labels support quick scanning. Avoid decorative school clichés that compete with task information.

## Design principles to explore

- Put time-sensitive information first.
- Use labels and dates that remain clear without relying on color alone.
- Keep the most common task visible on a narrow screen.
- Use consistent spacing, type, and component patterns.
- Include keyboard-visible focus and readable contrast in the implementation.

## How we will evaluate the concept

These are review questions, not claims of proven impact:

- Can someone identify the next class and its location at a glance?
- Can someone find the nearest deadline without scanning every card?
- Does the mobile layout preserve the same priorities as desktop?
- Are announcement priority and deadline status understandable without color alone?
- Can the key information be reached and understood with keyboard navigation and a screen reader-friendly structure?

## Planned portfolio artifacts

- Short problem framing and clearly labeled assumptions.
- Low-fidelity wireframes for desktop and mobile.
- Final dashboard screens and a small set of components.
- One or more alternate states.
- A short decision log explaining important tradeoffs.
- Optional coded responsive page after the design is settled.

## Learning goals

- Practice turning a broad brief into one focused user task.
- Practice dashboard information hierarchy and responsive behavior.
- Explain design choices in plain language.
- Later, translate the design into semantic HTML, CSS, and accessible interactions.

## Agreed project choices

- Audience: broad student audience.
- Visual direction: minimalist with a campus feel.
- Design tool: Figma.
