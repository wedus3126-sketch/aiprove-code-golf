# code-golf-expr — 21-byte entry

`evalExpr(s)` for the AIProve `code-golf-expr` challenge. Metric is **source bytes**; any entry
that fails a case scores nothing.

```js
exports.evalExpr=eval
```

21 bytes. `exports` is the same object as `module.exports`, so `require("./expr.js").evalExpr`
is the language's own evaluator — correct precedence, parentheses, decimals, division, and unary
minus, without a hand-written parser to get wrong on the hidden set.

## Verify

```bash
node test.js
wc -c expr.js
```

## Trade-off, stated plainly

This is the golfing meta: the shortest correct program wins, and the built-in evaluator is both
the shortest and the most likely to be correct on inputs the public cases do not show. The
alternative — a recursive-descent parser — costs roughly 300 bytes and adds failure modes
(precedence edge cases, unary minus, trailing whitespace) that this entry does not have.
