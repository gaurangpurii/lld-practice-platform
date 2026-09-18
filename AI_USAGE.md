# AI_USAGE.md

## 1. Structured submission fields
**AI suggested:** treating an LLD attempt as a combination of classes, UML and code. 

**Accepted with modification:** I made the core submission structured around requirements, responsibilities, relationships, behaviour, trade-offs and optional code. This better targets the actual reasoning being evaluated and avoids requiring a full diagram editor for the MVP.

## 2. Deterministic + LLM evaluator boundary
**AI suggested:** using an LLM to score the entire design.

**Rejected as the only evaluator:** a purely LLM-based score can be inconsistent and can overfit to a particular “ideal” design. I kept deterministic evidence checks in the MVP and designed an `Evaluator` interface so an LLM can be added later for nuanced reasoning.

## 3. Multiple valid designs
**AI suggested:** compare the submission with a reference answer.

**Rejected as the main mechanism:** LLD has multiple valid solutions. The prototype instead checks whether important design decisions are explicit and explainable. The reference solution is treated as guidance, not as a canonical class-name matcher.

## 4. Scope
**AI suggested:** adding authentication, a database, diagrams, code execution and real-time collaboration.

**Rejected for this assignment:** those features increase implementation surface without improving the core practice loop enough for a two-day MVP. The architecture leaves clear extension points for them.

## 5. Feedback wording
**AI assisted:** drafting concise feedback categories and actions.

**Accepted with review:** feedback was kept action-oriented: each warning says what is missing and what the learner should add on the next iteration.
