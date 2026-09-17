# Design Note

## MVP flow

1. Problem Library — select Parking Lot, Elevator or Vending Machine.
2. Practice — read requirements, reveal staged hints, and fill a structured design.
3. Submit — create an immutable attempt snapshot and evaluate it.
4. Feedback — inspect signal-level findings, evidence, and next actions.
5. History — review previous scores and reopen an attempt.
6. Try again — start a fresh attempt for the same problem.

## Domain model

- `Problem`: prompt, requirements, hints and rubric.
- `Submission`: learner's structured design attempt.
- `Attempt`: timestamped submission with status and evaluation.
- `Evaluation`: score, summary, strengths, next steps and feedback items.
- `Evaluator`: replaceable evaluation strategy.

### Key responsibility boundaries

`Problem` is content, not learner state. `Attempt` owns the lifecycle of a learner submission. `Evaluator` evaluates; it does not persist. Storage persists attempts; it does not calculate feedback. The React UI orchestrates these domain services but does not contain scoring rules.

## Evaluation approach

### Deterministic now

The evaluator checks six dimensions:

1. Completeness
2. Abstraction / variation points
3. Responsibility boundaries
4. Relationships / ownership
5. Behaviour / edge cases
6. Trade-offs

This is intentionally evidence-based rather than a canonical-class-name checker.

### LLM later

A second implementation can satisfy the same evaluator boundary:

```ts
interface Evaluator {
  evaluate(problem: Problem, submission: Submission): Promise<Evaluation>
}
```

An LLM evaluator can receive the problem, requirements, submission and rubric and return structured JSON. A schema validator should reject malformed output. The deterministic evaluator remains useful as a baseline/safety net and for cheap checks.

### Other future evaluators

- `CodeEvaluator`: compile/run tests against submitted code.
- `HumanEvaluator`: reviewer queue and comments.
- `HybridEvaluator`: deterministic checks + LLM reasoning.

The practice flow does not need to change when an evaluator changes.

## Slow or failed evaluation

Persist the attempt first with `status=submitted`. The UI can then transition to `evaluated` or `failed`. A retry action can re-run the evaluator. For an MVP this can be one server endpoint with a background job/queue later; there is no need for microservices.

## Important trade-offs

- **Text form over full UML editor:** faster to build and easier to evaluate consistently. A diagram editor can be added after validating the loop.
- **LocalStorage over database:** zero setup and enough for a prototype; it sacrifices multi-device history.
- **Deterministic feedback first:** predictable and cheap; less nuanced than an LLM.
- **Structured fields over one large textarea:** slightly more friction, but makes the learner think through responsibilities and trade-offs and gives the evaluator useful evidence.
- **No canonical score:** score is a progress signal, not a claim that there is one correct design.

## Light HLD consideration

For more users, a simple API-backed monolith can store Problems, Attempts and Evaluations in a relational database. Evaluation requests can be handed to a small job queue when latency becomes noticeable. The UI can poll an attempt status. This is sufficient before considering distributed services.
