# Student Portal — low-fidelity wireframe spec

**Version:** 1  
**Audience:** Broad university student audience  
**Visual direction:** Minimal, with a subtle campus character  
**Design tool:** Figma

These are structural wireframes. Use grayscale fills and placeholder shapes first; save color, imagery, and final typography for the visual-design pass. Names and schedule details below are sample content for the concept.

## Frame A — Desktop dashboard

**Frame size:** 1440 × 1000 px  
**Main content width:** 1144 px after the 232 px sidebar and 32 px inner margins  
**Layout:** 232 px side navigation + 32 px gutter + flexible content area

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│  CAMPUS / Portal                         Search…       Alerts     Alex ▾     │
├──────────────────┬───────────────────────────────────────────────────────────┤
│  Overview        │  Tuesday, 10 November                                    │
│  My courses      │  Good morning, Alex                                      │
│  Schedule        │  Here’s what needs your attention today.                 │
│  Assignments     │                                                           │
│  Announcements   │  ┌──────────────────────────────┐ ┌─────────────────────┐ │
│                  │  │ NEXT CLASS                   │ │ UPCOMING DEADLINES  │ │
│  Help            │  │ 09:30 · Biology 101         │ │ Lab report          │ │
│  Settings        │  │ Science Hall · Room 204     │ │ Due Thu, 12 Nov     │ │
│                  │  │ [Open course]               │ │                     │ │
│                  │  │ Next: Writing seminar 11:00 │ │ Reading response   │ │
│                  │  └──────────────────────────────┘ │ Due Fri, 13 Nov     │ │
│                  │                                    │ [View all]          │ │
│                  │                                    └─────────────────────┘ │
│                  │  IMPORTANT NOTICE                                         │
│                  │  Library hours change this week             [Details]     │
│                  │                                                           │
│                  │  ┌─────────────────────────────────────────────────────┐ │
│                  │  │ TODAY’S SCHEDULE                                    │ │
│                  │  │ 09:30 Biology 101 · Science Hall                   │ │
│                  │  │ 11:00 Writing seminar · Arts Building              │ │
│                  │  └─────────────────────────────────────────────────────┘ │
└──────────────────┴───────────────────────────────────────────────────────────┘
```

### Desktop hierarchy notes

- Keep the next class and nearest deadline visible together near the top.
- Use the announcement as a distinct, compact notice; reserve strong emphasis for genuinely time-sensitive items.
- Keep the full schedule lower in the page so the first view stays focused.
- The left navigation is persistent on desktop. The selected destination needs a label or shape cue as well as color.

## Frame B — Mobile dashboard

**Frame size:** 390 × 844 px  
**Layout:** Single column; 16 px side margins; content scrolls vertically

```text
┌──────────────────────────────┐
│ ☰   CAMPUS / Portal      Alex│
├──────────────────────────────┤
│ Tuesday, 10 November          │
│ Good morning, Alex            │
│ Your day at a glance          │
│                              │
│ ┌──────────────────────────┐ │
│ │ NEXT CLASS               │ │
│ │ 09:30                    │ │
│ │ Biology 101              │ │
│ │ Science Hall · Room 204  │ │
│ │ [Open course]            │ │
│ └──────────────────────────┘ │
│                              │
│ UPCOMING DEADLINES   View all│
│ ┌──────────────────────────┐ │
│ │ Lab report               │ │
│ │ Due Thu, 12 Nov           │ │
│ ├──────────────────────────┤ │
│ │ Reading response         │ │
│ │ Due Fri, 13 Nov           │ │
│ └──────────────────────────┘ │
│                              │
│ IMPORTANT NOTICE             │
│ Library hours change this    │
│ week                  Details│
│                              │
│ TODAY’S SCHEDULE             │
│ 09:30 Biology 101             │
│ 11:00 Writing seminar         │
│                              │
│ Home   Courses   Schedule  ☰ │
└──────────────────────────────┘
```

### Mobile hierarchy notes

- Preserve the same information priority as desktop: next class first, deadlines second, notice third.
- Use a compact menu or bottom navigation, not both as equally prominent navigation systems in the first pass.
- Keep course, time, and location together so the next-class card answers the full “where and when?” question.
- Check whether the bottom navigation remains visible while scrolling; make this a deliberate prototype decision.

## Figma build sequence

1. Rename the Figma file **Student Portal — Dashboard Redesign**.
2. Rename the first page **01 — Wireframes**.
3. Create two frames named **Desktop / 1440** and **Mobile / 390** at the sizes above.
4. Place the desktop and mobile sections as rectangles and text labels, using grayscale only.
5. Align repeated sections to a consistent spacing rhythm. Start with 8 px increments and adjust where needed.
6. Compare the two frames: the mobile layout should reorder and simplify content without hiding the primary task.
7. Before adding visual styling, check the five questions below.

## Review checklist

- Is the next class the clearest item on both frames?
- Can someone find the closest deadline quickly?
- Does each item have a clear label, not just an icon?
- Does the mobile frame keep important information above less urgent content?
- Is the difference between an important notice and a routine announcement clear?
