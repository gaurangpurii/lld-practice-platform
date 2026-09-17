# Research Note — LLD Forge

## Learner problem

LLD/OOD practice is an open-ended skill. A learner can name classes and design patterns without understanding ownership, behaviour, or why an abstraction exists. The useful unit of practice is therefore not “read a solution”; it is an attempt that can be compared against a rubric and improved on the next iteration.

## Existing approaches researched

**Educative — Grokking the Low-Level Design Interview.** The course uses a structured progression through OOP, UML, SOLID, design patterns and 20+ real-world problems. It explicitly teaches requirement gathering, diagrams and code skeletons. This validates a structured, repeatable workflow, but its core product is a course rather than a lightweight feedback loop. Source: https://www.educative.io/courses/grokking-the-low-level-design-interview-using-ood-principles

**Hello Interview — Guided LLD Practice.** Its LLD practice page offers step-by-step practice and personalized feedback across problems such as Parking Lot, Elevator and Rate Limiter. This validates feedback as a product feature rather than only an answer key. Source: https://www.hellointerview.com/practice/low-level-design

**LLDCanvas.** It combines a UML editor, practice problems, design patterns, interview mode, analytics and code execution. This shows demand for an integrated workspace, but also demonstrates how quickly an LLD product can expand into a large platform. Source: https://www.lldcanvas.in/

**Excalidraw.** A general-purpose collaborative drawing surface is useful for diagrams, but it is not specialized for evaluating object responsibilities or design trade-offs. Source: https://excalidraw.com/

## Gap / product direction

The MVP should not try to beat these products on content volume. It should focus on the narrowest high-value loop: **structured attempt → explainable evaluation → concrete next iteration**.

The learner is asked for six artifacts: assumptions, classes/responsibilities, relationships/abstractions, behaviour/edge cases, trade-offs, and optional code. This prevents a submission such as “ParkingLot, Car, Spot” from looking complete when the important design decisions are absent.

## Evaluation principle

There is rarely one correct LLD. Deterministic checks should evaluate observable design evidence: whether responsibilities are stated, variation points are isolated, relationships are explicit, failure paths are addressed, and trade-offs are explained. An LLM is better reserved for reasoning-heavy feedback such as comparing alternatives, identifying subtle coupling, and generating follow-up questions.

## MVP decision

A small monolith with localStorage is sufficient for the two-day assignment. The prototype uses a deterministic evaluator now, while the domain exposes a natural evaluator boundary for future LLM/human/code evaluators.
