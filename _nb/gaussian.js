---
description: creates a variable "_gaus_" with a normal distribution from (0,1) //originally made by joshuakcockrell on stackoverflow, adapted by gem
variables:
  - gaus
tag: functions
order: 0
---

let gaus = -1;
while (gaus > 1 || gaus < 0) {
  let u = 0;
  let v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  gaus = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  gaus = gaus / 10.0 + 0.5;
}
