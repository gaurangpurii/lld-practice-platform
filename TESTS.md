# Test coverage

The automated test suite in `tests/evaluator.test.ts` covers:

- A complete structured design receives a strong score and passes abstraction checks.
- A thin submission is flagged as incomplete and receives a lower score.

Manual acceptance tests for the browser prototype:

1. Open `prototype.html` directly in a browser.
2. Select a problem and verify the prompt + requirements render.
3. Reveal hints one at a time.
4. Submit an empty/thin design and verify warnings appear.
5. Submit a complete design containing an interface/strategy, ownership/composition, responsibilities, edge cases and trade-offs; verify the score and pass signals improve.
6. Return to History and verify the attempt persists after refresh.
7. Use Try Again and verify a clean attempt starts.
8. Resize to mobile width and verify the layout stacks without horizontal overflow.
