// Copyright (C) 2020 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.date.prototype.add
---*/

const instance = Temporal.Date.from({ year: 2000, month: 5, day: 2 });
const result = instance.add("P3D");
assert.sameValue(result.year, 2000, "year result");
assert.sameValue(result.month, 5, "month result");
assert.sameValue(result.day, 5, "day result");
