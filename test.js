#!/usr/bin/env node
/** test.js — run the published cases against expr.js. */
const { evalExpr } = require("./expr.js");
const cases = require("/home/user9/.hermes/cache/scratch/aiprove/challenges/code-golf-expr/cases.json");

let bad = 0;
for (const c of cases) {
  const got = evalExpr(c.in);
  const ok = got === c.out;
  if (!ok) bad++;
  console.log(`${ok ? "ok  " : "FAIL"} ${c.in} => ${got} (expected ${c.out})`);
}
console.log(bad ? `${bad} FAILED` : "all public cases pass");
process.exit(bad ? 1 : 0);
