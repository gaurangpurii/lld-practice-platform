# LLD Forge — LLD Practice Platform

A focused two-day MVP for practicing Low-Level Design through a repeatable loop: **choose a problem → design → submit → get explainable feedback → review → try again**.

## Product direction

The prototype deliberately avoids becoming an LMS. A learner provides structured design notes instead of only a class list: requirements/assumptions, responsibilities, relationships/abstractions, behaviour/edge cases, trade-offs, and an optional code sketch. This makes the attempt meaningful even when multiple designs can be valid.

## Features

- 3 interview-style LLD problems: Parking Lot, Elevator System, Vending Machine
- Timed practice session
- Structured submission form
- Explainable deterministic evaluator with six signals
- Action-oriented feedback and next iteration prompts
- Attempt history persisted in browser localStorage
- Responsive UI
- Unit tests for strong/weak submissions

## Evaluation architecture

`Submission` → `Evaluator` → `Evaluation`

The evaluator is intentionally deterministic for the MVP. It checks for concrete design evidence rather than pretending there is one canonical answer. An `Evaluator` interface can later support an LLM evaluator, code/contract tests, or human review without changing the practice flow.

Suggested production interface:

```ts
interface Evaluator { evaluate(problem: Problem, submission: Submission): Promise<Evaluation> }
```

For slow/failed evaluation, the UI should persist the submission as `submitted`, show `Evaluation in progress`, and retry or expose a `failed` state. No distributed architecture is required.

## Limitations

- Browser localStorage instead of a backend/authentication.
- Deterministic evaluator rather than a live LLM.
- Text-based design input rather than a full UML editor.
- No collaborative editing.
- No server-side persistence.

These are intentional scope choices for a two-day MVP.

## Research note

See `RESEARCH.md`. The research looked at Educative's structured OOD course, Hello Interview's guided LLD practice, LLDCanvas's integrated editor/practice approach, and Excalidraw as a diagramming primitive. The product gap identified is not a lack of content; it is making a learner's own design attempt structured enough to receive useful, explainable feedback while preserving room for multiple valid solutions.

## Design note

See `DESIGN.md` for domain model, evaluator strategy, extensibility, and trade-offs.
