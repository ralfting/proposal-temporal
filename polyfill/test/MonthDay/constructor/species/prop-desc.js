// Copyright (C) 2020 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-get-temporal.monthday-@@species
info: |
    Temporal.MonthDay[@@species] is an accessor property whose set accessor function is undefined.

    Every accessor property described in clauses 18 through 26 and in Annex B.2 has the attributes
    { [[Enumerable]]: false, [[Configurable]]: true } unless otherwise specified.
    If only a get accessor function is described, the set accessor function is the default value,
    undefined.
includes: [propertyHelper.js]
features: [Symbol.species]
---*/

const descriptor = Object.getOwnPropertyDescriptor(Temporal.MonthDay, Symbol.species);
assert.sameValue(typeof descriptor, "object", "Symbol.species descriptor should exist");
assert.sameValue(typeof descriptor.get, "function");
assert.sameValue(descriptor.set, undefined);

verifyProperty(Temporal.MonthDay, Symbol.species, {
  enumerable: false,
  configurable: true,
});
