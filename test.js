#!/usr/bin/env node
/** test.js — run the published cases against expr.js. */
const { evalExpr } = require("./expr.js");

const cases = [
  ["1+2*3", 7],
  ["(1+2)*3", 9],
  ["10/4", 2.5],
  ["2*2*2*2", 16],
  ["7-3-2", 2],
  ["(8-2)/(1+2)", 2],
  ["3.5+1.5", 5],
  ["100", 100],
  ["2*(3+(4-1))", 12],
];

let bad = 0;
for (const [expr, want] of cases) {
  const got = evalExpr(expr);
  const ok = got === want;
  if (!ok) bad++;
  console.log(`${ok ? "ok  " : "FAIL"} ${expr} => ${got} (expected ${want})`);
}
console.log(bad ? `${bad} FAILED` : "all public cases pass");
process.exit(bad ? 1 : 0);
