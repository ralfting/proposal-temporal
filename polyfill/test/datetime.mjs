#! /usr/bin/env -S node --experimental-modules

/*
 ** Copyright (C) 2018-2019 Bloomberg LP. All rights reserved.
 ** This code is governed by the license found in the LICENSE file.
 */

import Demitasse from '@pipobscure/demitasse';
const { describe, it, report } = Demitasse;

import Pretty from '@pipobscure/demitasse-pretty';
const { reporter } = Pretty;

import { strict as assert } from 'assert';
const { equal, notEqual, throws } = assert;

import * as Temporal from 'proposal-temporal';
const { DateTime } = Temporal;

describe('DateTime', () => {
  describe('Structure', () => {
    it('DateTime is a Function', () => {
      equal(typeof DateTime, 'function');
    });
    it('DateTime has a prototype', () => {
      assert(DateTime.prototype);
      equal(typeof DateTime.prototype, 'object');
    });
    describe('DateTime.prototype', () => {
      it('DateTime.prototype has year', () => {
        assert('year' in DateTime.prototype);
      });
      it('DateTime.prototype has month', () => {
        assert('month' in DateTime.prototype);
      });
      it('DateTime.prototype has day', () => {
        assert('day' in DateTime.prototype);
      });
      it('DateTime.prototype has hour', () => {
        assert('hour' in DateTime.prototype);
      });
      it('DateTime.prototype has minute', () => {
        assert('minute' in DateTime.prototype);
      });
      it('DateTime.prototype has second', () => {
        assert('second' in DateTime.prototype);
      });
      it('DateTime.prototype has millisecond', () => {
        assert('millisecond' in DateTime.prototype);
      });
      it('DateTime.prototype has microsecond', () => {
        assert('microsecond' in DateTime.prototype);
      });
      it('DateTime.prototype has nanosecond', () => {
        assert('nanosecond' in DateTime.prototype);
      });
      it('DateTime.prototype has dayOfWeek', () => {
        assert('dayOfWeek' in DateTime.prototype);
      });
      it('DateTime.prototype has dayOfYear', () => {
        assert('dayOfYear' in DateTime.prototype);
      });
      it('DateTime.prototype has weekOfYear', () => {
        assert('weekOfYear' in DateTime.prototype);
      });
      it('DateTime.prototype has daysInWeek', () => {
        assert('daysInWeek' in DateTime.prototype);
      });
      it('DateTime.prototype has monthsInYear', () => {
        assert('monthsInYear' in DateTime.prototype);
      });
      it('DateTime.prototype.with is a Function', () => {
        equal(typeof DateTime.prototype.with, 'function');
      });
      it('DateTime.prototype.add is a Function', () => {
        equal(typeof DateTime.prototype.add, 'function');
      });
      it('DateTime.prototype.subtract is a Function', () => {
        equal(typeof DateTime.prototype.subtract, 'function');
      });
      it('DateTime.prototype.difference is a Function', () => {
        equal(typeof DateTime.prototype.difference, 'function');
      });
      it('DateTime.prototype.round is a Function', () => {
        equal(typeof DateTime.prototype.round, 'function');
      });
      it('DateTime.prototype.equals is a Function', () => {
        equal(typeof DateTime.prototype.equals, 'function');
      });
      it('DateTime.prototype.toDate is a Function', () => {
        equal(typeof DateTime.prototype.toDate, 'function');
      });
      it('DateTime.prototype.toTime is a Function', () => {
        equal(typeof DateTime.prototype.toTime, 'function');
      });
      it('DateTime.prototype.getFields is a Function', () => {
        equal(typeof DateTime.prototype.getFields, 'function');
      });
      it('DateTime.prototype.getISOFields is a Function', () => {
        equal(typeof DateTime.prototype.getISOFields, 'function');
      });
      it('DateTime.prototype.toString is a Function', () => {
        equal(typeof DateTime.prototype.toString, 'function');
      });
      it('DateTime.prototype.toJSON is a Function', () => {
        equal(typeof DateTime.prototype.toJSON, 'function');
      });
    });
    it('DateTime.from is a Function', () => {
      equal(typeof DateTime.from, 'function');
    });
    it('DateTime.compare is a Function', () => {
      equal(typeof DateTime.compare, 'function');
    });
  });
  describe('Construction', () => {
    describe('new DateTime(1976, 11, 18, 15, 23, 30, 123, 456, 789, calendar)', () => {
      let datetime;
      const calendar = Temporal.Calendar.from('iso8601');
      it('datetime can be constructed', () => {
        datetime = new DateTime(1976, 11, 18, 15, 23, 30, 123, 456, 789, calendar);
        assert(datetime);
        equal(typeof datetime, 'object');
      });
      it('datetime.year is 1976', () => equal(datetime.year, 1976));
      it('datetime.month is 11', () => equal(datetime.month, 11));
      it('datetime.day is 18', () => equal(datetime.day, 18));
      it('datetime.hour is 15', () => equal(datetime.hour, 15));
      it('datetime.minute is 23', () => equal(datetime.minute, 23));
      it('datetime.second is 30', () => equal(datetime.second, 30));
      it('datetime.millisecond is 123', () => equal(datetime.millisecond, 123));
      it('datetime.microsecond is 456', () => equal(datetime.microsecond, 456));
      it('datetime.nanosecond is 789', () => equal(datetime.nanosecond, 789));
      it('datetime.calendar is the object', () => equal(datetime.calendar, calendar));
      it('datetime.dayOfWeek is 4', () => equal(datetime.dayOfWeek, 4));
      it('datetime.dayOfYear is 323', () => equal(datetime.dayOfYear, 323));
      it('datetime.weekOfYear is 47', () => equal(datetime.weekOfYear, 47));
      it('datetime.daysInWeek is 7', () => equal(datetime.daysInWeek, 7));
      it('datetime.monthsInYear is 12', () => equal(datetime.monthsInYear, 12));
      it('`${datetime}` is 1976-11-18T15:23:30.123456789', () => equal(`${datetime}`, '1976-11-18T15:23:30.123456789'));
    });
    describe('new DateTime(1976, 11, 18, 15, 23, 30, 123, 456)', () => {
      let datetime;
      it('datetime can be constructed', () => {
        datetime = new DateTime(1976, 11, 18, 15, 23, 30, 123, 456);
        assert(datetime);
        equal(typeof datetime, 'object');
      });
      it('datetime.year is 1976', () => equal(datetime.year, 1976));
      it('datetime.month is 11', () => equal(datetime.month, 11));
      it('datetime.day is 18', () => equal(datetime.day, 18));
      it('datetime.hour is 15', () => equal(datetime.hour, 15));
      it('datetime.minute is 23', () => equal(datetime.minute, 23));
      it('datetime.second is 30', () => equal(datetime.second, 30));
      it('datetime.millisecond is 123', () => equal(datetime.millisecond, 123));
      it('datetime.microsecond is 456', () => equal(datetime.microsecond, 456));
      it('datetime.nanosecond is 0', () => equal(datetime.nanosecond, 0));
      it('datetime.dayOfWeek is 4', () => equal(datetime.dayOfWeek, 4));
      it('datetime.dayOfYear is 323', () => equal(datetime.dayOfYear, 323));
      it('datetime.weekOfYear is 47', () => equal(datetime.weekOfYear, 47));
      it('datetime.daysInWeek is 7', () => equal(datetime.daysInWeek, 7));
      it('datetime.monthsInYear is 12', () => equal(datetime.monthsInYear, 12));
      it('`${datetime}` is 1976-11-18T15:23:30.123456', () => equal(`${datetime}`, '1976-11-18T15:23:30.123456'));
    });
    describe('new DateTime(1976, 11, 18, 15, 23, 30, 123)', () => {
      let datetime;
      it('datetime can be constructed', () => {
        datetime = new DateTime(1976, 11, 18, 15, 23, 30, 123);
        assert(datetime);
        equal(typeof datetime, 'object');
      });
      it('datetime.year is 1976', () => equal(datetime.year, 1976));
      it('datetime.month is 11', () => equal(datetime.month, 11));
      it('datetime.day is 18', () => equal(datetime.day, 18));
      it('datetime.hour is 15', () => equal(datetime.hour, 15));
      it('datetime.minute is 23', () => equal(datetime.minute, 23));
      it('datetime.second is 30', () => equal(datetime.second, 30));
      it('datetime.millisecond is 123', () => equal(datetime.millisecond, 123));
      it('datetime.microsecond is 0', () => equal(datetime.microsecond, 0));
      it('datetime.nanosecond is 0', () => equal(datetime.nanosecond, 0));
      it('datetime.dayOfWeek is 4', () => equal(datetime.dayOfWeek, 4));
      it('datetime.dayOfYear is 323', () => equal(datetime.dayOfYear, 323));
      it('datetime.weekOfYear is 47', () => equal(datetime.weekOfYear, 47));
      it('datetime.daysInWeek is 7', () => equal(datetime.daysInWeek, 7));
      it('datetime.monthsInYear is 12', () => equal(datetime.monthsInYear, 12));
      it('`${datetime}` is 1976-11-18T15:23:30.123', () => equal(`${datetime}`, '1976-11-18T15:23:30.123'));
    });
    describe('new DateTime(1976, 11, 18, 15, 23, 30)', () => {
      let datetime;
      it('datetime can be constructed', () => {
        datetime = new DateTime(1976, 11, 18, 15, 23, 30);
        assert(datetime);
        equal(typeof datetime, 'object');
      });
      it('datetime.year is 1976', () => equal(datetime.year, 1976));
      it('datetime.month is 11', () => equal(datetime.month, 11));
      it('datetime.day is 18', () => equal(datetime.day, 18));
      it('datetime.hour is 15', () => equal(datetime.hour, 15));
      it('datetime.minute is 23', () => equal(datetime.minute, 23));
      it('datetime.second is 30', () => equal(datetime.second, 30));
      it('datetime.millisecond is 0', () => equal(datetime.millisecond, 0));
      it('datetime.microsecond is 0', () => equal(datetime.microsecond, 0));
      it('datetime.nanosecond is 0', () => equal(datetime.nanosecond, 0));
      it('datetime.dayOfWeek is 4', () => equal(datetime.dayOfWeek, 4));
      it('datetime.dayOfYear is 323', () => equal(datetime.dayOfYear, 323));
      it('datetime.weekOfYear is 47', () => equal(datetime.weekOfYear, 47));
      it('datetime.daysInWeek is 7', () => equal(datetime.daysInWeek, 7));
      it('datetime.monthsInYear is 12', () => equal(datetime.monthsInYear, 12));
      it('`${datetime}` is 1976-11-18T15:23:30', () => equal(`${datetime}`, '1976-11-18T15:23:30'));
    });
    describe('new DateTime(1976, 11, 18, 15, 23)', () => {
      let datetime;
      it('datetime can be constructed', () => {
        datetime = new DateTime(1976, 11, 18, 15, 23);
        assert(datetime);
        equal(typeof datetime, 'object');
      });
      it('datetime.year is 1976', () => equal(datetime.year, 1976));
      it('datetime.month is 11', () => equal(datetime.month, 11));
      it('datetime.day is 18', () => equal(datetime.day, 18));
      it('datetime.hour is 15', () => equal(datetime.hour, 15));
      it('datetime.minute is 23', () => equal(datetime.minute, 23));
      it('datetime.second is 0', () => equal(datetime.second, 0));
      it('datetime.millisecond is 0', () => equal(datetime.millisecond, 0));
      it('datetime.microsecond is 0', () => equal(datetime.microsecond, 0));
      it('datetime.nanosecond is 0', () => equal(datetime.nanosecond, 0));
      it('datetime.dayOfWeek is 4', () => equal(datetime.dayOfWeek, 4));
      it('datetime.dayOfYear is 323', () => equal(datetime.dayOfYear, 323));
      it('datetime.weekOfYear is 47', () => equal(datetime.weekOfYear, 47));
      it('datetime.daysInWeek is 7', () => equal(datetime.daysInWeek, 7));
      it('datetime.monthsInYear is 12', () => equal(datetime.monthsInYear, 12));
      it('`${datetime}` is 1976-11-18T15:23:00', () => equal(`${datetime}`, '1976-11-18T15:23:00'));
    });
    describe('new DateTime(1976, 11, 18, 15)', () => {
      const datetime = new DateTime(1976, 11, 18, 15);
      it('`${datetime}` is 1976-11-18T15:00:00', () => equal(`${datetime}`, '1976-11-18T15:00:00'));
    });
    describe('new DateTime(1976, 11, 18)', () => {
      const datetime = new DateTime(1976, 11, 18);
      it('`${datetime}` is 1976-11-18T00:00:00', () => equal(`${datetime}`, '1976-11-18T00:00:00'));
    });
    describe('constructor treats -0 as 0', () => {
      it('ignores the sign of -0', () => {
        const datetime = new DateTime(1976, 11, 18, -0, -0, -0, -0, -0);
        equal(datetime.hour, 0);
        equal(datetime.minute, 0);
        equal(datetime.second, 0);
        equal(datetime.millisecond, 0);
        equal(datetime.microsecond, 0);
        equal(datetime.nanosecond, 0);
      });
    });
  });
  describe('.with manipulation', () => {
    const datetime = new DateTime(1976, 11, 18, 15, 23, 30, 123, 456, 789);
    it('datetime.with({ year: 2019 } works', () => {
      equal(`${datetime.with({ year: 2019 })}`, '2019-11-18T15:23:30.123456789');
    });
    it('datetime.with({ month: 5 } works', () => {
      equal(`${datetime.with({ month: 5 })}`, '1976-05-18T15:23:30.123456789');
    });
    it('datetime.with({ day: 5 } works', () => {
      equal(`${datetime.with({ day: 5 })}`, '1976-11-05T15:23:30.123456789');
    });
    it('datetime.with({ hour: 5 } works', () => {
      equal(`${datetime.with({ hour: 5 })}`, '1976-11-18T05:23:30.123456789');
    });
    it('datetime.with({ minute: 5 } works', () => {
      equal(`${datetime.with({ minute: 5 })}`, '1976-11-18T15:05:30.123456789');
    });
    it('datetime.with({ second: 5 } works', () => {
      equal(`${datetime.with({ second: 5 })}`, '1976-11-18T15:23:05.123456789');
    });
    it('datetime.with({ millisecond: 5 } works', () => {
      equal(`${datetime.with({ millisecond: 5 })}`, '1976-11-18T15:23:30.005456789');
    });
    it('datetime.with({ microsecond: 5 } works', () => {
      equal(`${datetime.with({ microsecond: 5 })}`, '1976-11-18T15:23:30.123005789');
    });
    it('datetime.with({ nanosecond: 5 } works', () => {
      equal(`${datetime.with({ nanosecond: 5 })}`, '1976-11-18T15:23:30.123456005');
    });
    it('datetime.with({ month: 5, second: 15 } works', () => {
      equal(`${datetime.with({ month: 5, second: 15 })}`, '1976-05-18T15:23:15.123456789');
    });
    it('datetime.with(time) works', () => {
      const noon = Temporal.Time.from({ hour: 12 });
      equal(`${datetime.with(noon)}`, '1976-11-18T12:00:00');
    });
    it('datetime.with(iso time string)', () => {
      equal(`${datetime.with('12:00')}`, '1976-11-18T12:00:00');
    });
    it('datetime.with(date) works', () => {
      const date = Temporal.Date.from('1995-04-07');
      equal(`${datetime.with(date)}`, '1995-04-07T15:23:30.123456789');
    });
    it('datetime.with(iso date string)', () => {
      equal(`${datetime.with('1995-04-07')}`, '1995-04-07T15:23:30.123456789');
    });
    it('datetime.with(monthDay) works', () => {
      const md = Temporal.MonthDay.from('01-01');
      equal(`${datetime.with(md)}`, '1976-01-01T15:23:30.123456789');
    });
    it('datetime.with(yearMonth) works', () => {
      const ym = Temporal.YearMonth.from('1977-10');
      equal(`${datetime.with(ym)}`, '1977-10-18T15:23:30.123456789');
    });
    it('invalid overflow', () => {
      ['', 'CONSTRAIN', 'balance', 3, null].forEach((overflow) =>
        throws(() => datetime.with({ day: 5 }, { overflow }), RangeError)
      );
    });
    it('options may only be an object or undefined', () => {
      [null, 1, 'hello', true, Symbol('foo'), 1n].forEach((badOptions) =>
        throws(() => datetime.with({ day: 5 }, badOptions), TypeError)
      );
      [{}, () => {}, undefined].forEach((options) =>
        equal(`${datetime.with({ day: 5 }, options)}`, '1976-11-05T15:23:30.123456789')
      );
    });
    it('object must contain at least one correctly-spelled property', () => {
      throws(() => datetime.with({}), TypeError);
      throws(() => datetime.with({ months: 12 }), TypeError);
    });
    it('incorrectly-spelled properties are ignored', () => {
      equal(`${datetime.with({ month: 12, days: 15 })}`, '1976-12-18T15:23:30.123456789');
    });
    it('datetime.with(iso datetime string)', () => {
      const date2 = datetime.with('2019-05-17T12:34:56.007007007');
      equal(`${date2}`, '2019-05-17T12:34:56.007007007');
      const date3 = datetime.with('2019-05-17T12:34:56.007007007Z');
      equal(`${date3}`, '2019-05-17T12:34:56.007007007');
    });
    it('date.with(bad string)', () => {
      throws(() => datetime.with('42'), RangeError);
    });
  });
  describe('DateTime.compare() works', () => {
    const dt1 = DateTime.from('1976-11-18T15:23:30.123456789');
    const dt2 = DateTime.from('2019-10-29T10:46:38.271986102');
    it('equal', () => equal(DateTime.compare(dt1, dt1), 0));
    it('smaller/larger', () => equal(DateTime.compare(dt1, dt2), -1));
    it('larger/smaller', () => equal(DateTime.compare(dt2, dt1), 1));
    it('casts first argument', () => {
      equal(DateTime.compare({ year: 1976, month: 11, day: 18, hour: 15 }, dt2), -1);
      equal(DateTime.compare('1976-11-18T15:23:30.123456789', dt2), -1);
    });
    it('casts second argument', () => {
      equal(DateTime.compare(dt1, { year: 2019, month: 10, day: 29, hour: 10 }), -1);
      equal(DateTime.compare(dt1, '2019-10-29T10:46:38.271986102'), -1);
    });
    it('object must contain at least the required properties', () => {
      throws(() => DateTime.compare({ year: 1976 }, dt2), TypeError);
      throws(() => DateTime.compare(dt1, { year: 2019 }), TypeError);
    });
  });
  describe('DateTime.equals() works', () => {
    const dt1 = DateTime.from('1976-11-18T15:23:30.123456789');
    const dt2 = DateTime.from('2019-10-29T10:46:38.271986102');
    it('equal', () => assert(dt1.equals(dt1)));
    it('unequal', () => assert(!dt1.equals(dt2)));
    it('casts argument', () => {
      assert(!dt2.equals({ year: 1976, month: 11, day: 18, hour: 15 }));
      assert(!dt2.equals('1976-11-18T15:23:30.123456789'));
    });
    it('object must contain at least the required properties', () => {
      throws(() => dt2.equals({ year: 1976 }), TypeError);
    });
  });
  describe("Comparison operators don't work", () => {
    const dt1 = DateTime.from('1963-02-13T09:36:29.123456789');
    const dt1again = DateTime.from('1963-02-13T09:36:29.123456789');
    const dt2 = DateTime.from('1976-11-18T15:23:30.123456789');
    it('=== is object equality', () => equal(dt1, dt1));
    it('!== is object equality', () => notEqual(dt1, dt1again));
    it('<', () => throws(() => dt1 < dt2));
    it('>', () => throws(() => dt1 > dt2));
    it('<=', () => throws(() => dt1 <= dt2));
    it('>=', () => throws(() => dt1 >= dt2));
  });
  describe('date/time maths', () => {
    const earlier = DateTime.from('1976-11-18T15:23:30.123456789');
    const later = DateTime.from('2019-10-29T10:46:38.271986102');
    ['years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds'].forEach((largestUnit) => {
      const diff = later.difference(earlier, { largestUnit });
      it(`(${earlier}).difference(${later}) == (${later}).difference(${earlier}).negated()`, () =>
        equal(`${earlier.difference(later, { largestUnit })}`, `${diff.negated()}`));
      it(`(${earlier}).add(${diff}) == (${later})`, () => assert(earlier.add(diff).equals(later)));
      it(`(${later}).subtract(${diff}) == (${earlier})`, () => assert(later.subtract(diff).equals(earlier)));
      it('symmetrical with regard to negative durations', () => {
        assert(earlier.subtract(diff.negated()).equals(later));
        assert(later.add(diff.negated()).equals(earlier));
      });
    });
  });
  describe('date/time maths: hours overflow', () => {
    it('subtract result', () => {
      const later = DateTime.from('2019-10-29T10:46:38.271986102');
      const earlier = later.subtract({ hours: 12 });
      equal(`${earlier}`, '2019-10-28T22:46:38.271986102');
    });
    it('add result', () => {
      const earlier = DateTime.from('2020-05-31T23:12:38.271986102');
      const later = earlier.add({ hours: 2 });
      equal(`${later}`, '2020-06-01T01:12:38.271986102');
    });
    it('symmetrical with regard to negative durations', () => {
      equal(`${DateTime.from('2019-10-29T10:46:38.271986102').add({ hours: -12 })}`, '2019-10-28T22:46:38.271986102');
      equal(
        `${DateTime.from('2020-05-31T23:12:38.271986102').subtract({ hours: -2 })}`,
        '2020-06-01T01:12:38.271986102'
      );
    });
  });
  describe('DateTime.add() works', () => {
    const jan31 = DateTime.from('2020-01-31T15:00');
    it('constrain when ambiguous result', () => {
      equal(`${jan31.add({ months: 1 })}`, '2020-02-29T15:00:00');
      equal(`${jan31.add({ months: 1 }, { overflow: 'constrain' })}`, '2020-02-29T15:00:00');
    });
    it('symmetrical with regard to negative durations in the time part', () => {
      equal(`${jan31.add({ minutes: -30 })}`, '2020-01-31T14:30:00');
      equal(`${jan31.add({ seconds: -30 })}`, '2020-01-31T14:59:30');
    });
    it('throw when ambiguous result with reject', () => {
      throws(() => jan31.add({ months: 1 }, { overflow: 'reject' }), RangeError);
    });
    it('invalid overflow', () => {
      ['', 'CONSTRAIN', 'balance', 3, null].forEach((overflow) =>
        throws(() => DateTime.from('2019-11-18T15:00').add({ months: 1 }, { overflow }), RangeError)
      );
    });
    it('mixed positive and negative values always throw', () => {
      ['constrain', 'reject'].forEach((overflow) =>
        throws(() => jan31.add({ hours: 1, minutes: -30 }, { overflow }), RangeError)
      );
    });
    it('options may only be an object or undefined', () => {
      [null, 1, 'hello', true, Symbol('foo'), 1n].forEach((badOptions) =>
        throws(() => jan31.add({ years: 1 }, badOptions), TypeError)
      );
      [{}, () => {}, undefined].forEach((options) =>
        equal(`${jan31.add({ years: 1 }, options)}`, '2021-01-31T15:00:00')
      );
    });
    it('object must contain at least one correctly-spelled property', () => {
      throws(() => jan31.add({}), TypeError);
      throws(() => jan31.add({ month: 12 }), TypeError);
    });
    it('incorrectly-spelled properties are ignored', () => {
      equal(`${jan31.add({ month: 1, days: 1 })}`, '2020-02-01T15:00:00');
    });
    it('casts argument', () => {
      equal(`${jan31.add(Temporal.Duration.from('P1MT1S'))}`, '2020-02-29T15:00:01');
      equal(`${jan31.add('P1MT1S')}`, '2020-02-29T15:00:01');
    });
  });
  describe('date.subtract() works', () => {
    const mar31 = DateTime.from('2020-03-31T15:00');
    it('constrain when ambiguous result', () => {
      equal(`${mar31.subtract({ months: 1 })}`, '2020-02-29T15:00:00');
      equal(`${mar31.subtract({ months: 1 }, { overflow: 'constrain' })}`, '2020-02-29T15:00:00');
    });
    it('symmetrical with regard to negative durations in the time part', () => {
      equal(`${mar31.subtract({ minutes: -30 })}`, '2020-03-31T15:30:00');
      equal(`${mar31.subtract({ seconds: -30 })}`, '2020-03-31T15:00:30');
    });
    it('throw when ambiguous result with reject', () => {
      throws(() => mar31.subtract({ months: 1 }, { overflow: 'reject' }), RangeError);
    });
    it('invalid overflow', () => {
      ['', 'CONSTRAIN', 'balance', 3, null].forEach((overflow) =>
        throws(() => DateTime.from('2019-11-18T15:00').subtract({ months: 1 }, { overflow }), RangeError)
      );
    });
    it('mixed positive and negative values always throw', () => {
      ['constrain', 'reject'].forEach((overflow) =>
        throws(() => mar31.add({ hours: 1, minutes: -30 }, { overflow }), RangeError)
      );
    });
    it('options may only be an object or undefined', () => {
      [null, 1, 'hello', true, Symbol('foo'), 1n].forEach((badOptions) =>
        throws(() => mar31.subtract({ years: 1 }, badOptions), TypeError)
      );
      [{}, () => {}, undefined].forEach((options) =>
        equal(`${mar31.subtract({ years: 1 }, options)}`, '2019-03-31T15:00:00')
      );
    });
    it('object must contain at least one correctly-spelled property', () => {
      throws(() => mar31.subtract({}), TypeError);
      throws(() => mar31.subtract({ month: 12 }), TypeError);
    });
    it('incorrectly-spelled properties are ignored', () => {
      equal(`${mar31.subtract({ month: 1, days: 1 })}`, '2020-03-30T15:00:00');
    });
    it('casts argument', () => {
      equal(`${mar31.subtract(Temporal.Duration.from('P1MT1S'))}`, '2020-02-29T14:59:59');
      equal(`${mar31.subtract('P1MT1S')}`, '2020-02-29T14:59:59');
    });
  });
  describe('DateTime.difference()', () => {
    const dt = DateTime.from('1976-11-18T15:23:30.123456789');
    it('casts argument', () => {
      equal(`${dt.difference({ year: 2019, month: 10, day: 29, hour: 10 })}`, '-P15684DT18H36M29.876543211S');
      equal(`${dt.difference('2019-10-29T10:46:38.271986102')}`, '-P15684DT19H23M8.148529313S');
    });
    const feb20 = DateTime.from('2020-02-01T00:00');
    const feb21 = DateTime.from('2021-02-01T00:00');
    it('defaults to returning days', () => {
      equal(`${feb21.difference(feb20)}`, 'P366D');
      equal(`${feb21.difference(feb20, { largestUnit: 'auto' })}`, 'P366D');
      equal(`${feb21.difference(feb20, { largestUnit: 'days' })}`, 'P366D');
      equal(`${DateTime.from('2021-02-01T00:00:00.000000001').difference(feb20)}`, 'P366DT0.000000001S');
      equal(`${feb21.difference(DateTime.from('2020-02-01T00:00:00.000000001'))}`, 'P365DT23H59M59.999999999S');
    });
    it('can return lower or higher units', () => {
      equal(`${feb21.difference(feb20, { largestUnit: 'years' })}`, 'P1Y');
      equal(`${feb21.difference(feb20, { largestUnit: 'months' })}`, 'P12M');
      equal(`${feb21.difference(feb20, { largestUnit: 'hours' })}`, 'PT8784H');
      equal(`${feb21.difference(feb20, { largestUnit: 'minutes' })}`, 'PT527040M');
      equal(`${feb21.difference(feb20, { largestUnit: 'seconds' })}`, 'PT31622400S');
    });
    it('can return subseconds', () => {
      const later = feb20.add({ days: 1, milliseconds: 250, microseconds: 250, nanoseconds: 250 });

      const msDiff = later.difference(feb20, { largestUnit: 'milliseconds' });
      equal(msDiff.seconds, 0);
      equal(msDiff.milliseconds, 86400250);
      equal(msDiff.microseconds, 250);
      equal(msDiff.nanoseconds, 250);

      const µsDiff = later.difference(feb20, { largestUnit: 'microseconds' });
      equal(µsDiff.milliseconds, 0);
      equal(µsDiff.microseconds, 86400250250);
      equal(µsDiff.nanoseconds, 250);

      const nsDiff = later.difference(feb20, { largestUnit: 'nanoseconds' });
      equal(nsDiff.microseconds, 0);
      equal(nsDiff.nanoseconds, 86400250250250);
    });
    it('does not include higher units than necessary', () => {
      const lastFeb20 = DateTime.from('2020-02-29T00:00');
      const lastFeb21 = DateTime.from('2021-02-28T00:00');
      equal(`${lastFeb21.difference(lastFeb20)}`, 'P365D');
      equal(`${lastFeb21.difference(lastFeb20, { largestUnit: 'months' })}`, 'P11M30D');
      equal(`${lastFeb21.difference(lastFeb20, { largestUnit: 'years' })}`, 'P11M30D');
    });
    it('weeks and months are mutually exclusive', () => {
      const laterDateTime = dt.add({ days: 42, hours: 3 });
      const weeksDifference = laterDateTime.difference(dt, { largestUnit: 'weeks' });
      notEqual(weeksDifference.weeks, 0);
      equal(weeksDifference.months, 0);
      const monthsDifference = laterDateTime.difference(dt, { largestUnit: 'months' });
      equal(monthsDifference.weeks, 0);
      notEqual(monthsDifference.months, 0);
    });
    it('no two different calendars', () => {
      const dt1 = new DateTime(2000, 1, 1, 0, 0, 0, 0, 0, 0);
      const dt2 = new DateTime(2000, 1, 1, 0, 0, 0, 0, 0, 0, Temporal.Calendar.from('japanese'));
      throws(() => dt1.difference(dt2), RangeError);
    });
    it('options may only be an object or undefined', () => {
      [null, 1, 'hello', true, Symbol('foo'), 1n].forEach((badOptions) =>
        throws(() => feb21.difference(feb20, badOptions), TypeError)
      );
      [{}, () => {}, undefined].forEach((options) => equal(`${feb21.difference(feb20, options)}`, 'P366D'));
    });
    const earlier = DateTime.from('2019-01-08T08:22:36.123456789');
    const later = DateTime.from('2021-09-07T12:39:40.987654321');
    it('throws on disallowed or invalid smallestUnit', () => {
      ['era', 'nonsense'].forEach((smallestUnit) => {
        throws(() => later.difference(earlier, { smallestUnit }), RangeError);
      });
    });
    it('throws if smallestUnit is larger than largestUnit', () => {
      const units = [
        'years',
        'months',
        'weeks',
        'days',
        'hours',
        'minutes',
        'seconds',
        'milliseconds',
        'microseconds',
        'nanoseconds'
      ];
      for (let largestIdx = 1; largestIdx < units.length; largestIdx++) {
        for (let smallestIdx = 0; smallestIdx < largestIdx; smallestIdx++) {
          const largestUnit = units[largestIdx];
          const smallestUnit = units[smallestIdx];
          throws(() => later.difference(earlier, { largestUnit, smallestUnit }), RangeError);
        }
      }
    });
    it('assumes a different default for largestUnit if smallestUnit is larger than days', () => {
      equal(`${later.difference(earlier, { smallestUnit: 'years' })}`, 'P3Y');
      equal(`${later.difference(earlier, { smallestUnit: 'months' })}`, 'P32M');
      equal(`${later.difference(earlier, { smallestUnit: 'weeks' })}`, 'P139W');
    });
    it('throws on invalid roundingMode', () => {
      throws(() => later.difference(earlier, { roundingMode: 'cile' }), RangeError);
    });
    const incrementOneNearest = [
      ['years', 'P3Y'],
      ['months', 'P32M'],
      ['weeks', 'P139W'],
      ['days', 'P973D'],
      ['hours', 'P973DT4H'],
      ['minutes', 'P973DT4H17M'],
      ['seconds', 'P973DT4H17M5S'],
      ['milliseconds', 'P973DT4H17M4.864S'],
      ['microseconds', 'P973DT4H17M4.864198S'],
      ['nanoseconds', 'P973DT4H17M4.864197532S']
    ];
    incrementOneNearest.forEach(([smallestUnit, expected]) => {
      const roundingMode = 'nearest';
      it(`rounds to nearest ${smallestUnit}`, () => {
        equal(`${later.difference(earlier, { smallestUnit, roundingMode })}`, expected);
        equal(`${earlier.difference(later, { smallestUnit, roundingMode })}`, `-${expected}`);
      });
    });
    const incrementOneCeil = [
      ['years', 'P3Y', '-P2Y'],
      ['months', 'P32M', '-P31M'],
      ['weeks', 'P140W', '-P139W'],
      ['days', 'P974D', '-P973D'],
      ['hours', 'P973DT5H', '-P973DT4H'],
      ['minutes', 'P973DT4H18M', '-P973DT4H17M'],
      ['seconds', 'P973DT4H17M5S', '-P973DT4H17M4S'],
      ['milliseconds', 'P973DT4H17M4.865S', '-P973DT4H17M4.864S'],
      ['microseconds', 'P973DT4H17M4.864198S', '-P973DT4H17M4.864197S'],
      ['nanoseconds', 'P973DT4H17M4.864197532S', '-P973DT4H17M4.864197532S']
    ];
    incrementOneCeil.forEach(([smallestUnit, expectedPositive, expectedNegative]) => {
      const roundingMode = 'ceil';
      it(`rounds up to ${smallestUnit}`, () => {
        equal(`${later.difference(earlier, { smallestUnit, roundingMode })}`, expectedPositive);
        equal(`${earlier.difference(later, { smallestUnit, roundingMode })}`, expectedNegative);
      });
    });
    const incrementOneFloor = [
      ['years', 'P2Y', '-P3Y'],
      ['months', 'P31M', '-P32M'],
      ['weeks', 'P139W', '-P140W'],
      ['days', 'P973D', '-P974D'],
      ['hours', 'P973DT4H', '-P973DT5H'],
      ['minutes', 'P973DT4H17M', '-P973DT4H18M'],
      ['seconds', 'P973DT4H17M4S', '-P973DT4H17M5S'],
      ['milliseconds', 'P973DT4H17M4.864S', '-P973DT4H17M4.865S'],
      ['microseconds', 'P973DT4H17M4.864197S', '-P973DT4H17M4.864198S'],
      ['nanoseconds', 'P973DT4H17M4.864197532S', '-P973DT4H17M4.864197532S']
    ];
    incrementOneFloor.forEach(([smallestUnit, expectedPositive, expectedNegative]) => {
      const roundingMode = 'floor';
      it(`rounds down to ${smallestUnit}`, () => {
        equal(`${later.difference(earlier, { smallestUnit, roundingMode })}`, expectedPositive);
        equal(`${earlier.difference(later, { smallestUnit, roundingMode })}`, expectedNegative);
      });
    });
    const incrementOneTrunc = [
      ['years', 'P2Y'],
      ['months', 'P31M'],
      ['weeks', 'P139W'],
      ['days', 'P973D'],
      ['hours', 'P973DT4H'],
      ['minutes', 'P973DT4H17M'],
      ['seconds', 'P973DT4H17M4S'],
      ['milliseconds', 'P973DT4H17M4.864S'],
      ['microseconds', 'P973DT4H17M4.864197S'],
      ['nanoseconds', 'P973DT4H17M4.864197532S']
    ];
    incrementOneTrunc.forEach(([smallestUnit, expected]) => {
      const roundingMode = 'trunc';
      it(`truncates to ${smallestUnit}`, () => {
        equal(`${later.difference(earlier, { smallestUnit, roundingMode })}`, expected);
        equal(`${earlier.difference(later, { smallestUnit, roundingMode })}`, `-${expected}`);
      });
    });
    it('nearest is the default', () => {
      equal(`${later.difference(earlier, { smallestUnit: 'minutes' })}`, 'P973DT4H17M');
      equal(`${later.difference(earlier, { smallestUnit: 'seconds' })}`, 'P973DT4H17M5S');
    });
    it('rounds to an increment of hours', () => {
      equal(`${later.difference(earlier, { smallestUnit: 'hours', roundingIncrement: 3 })}`, 'P973DT3H');
    });
    it('rounds to an increment of minutes', () => {
      equal(`${later.difference(earlier, { smallestUnit: 'minutes', roundingIncrement: 30 })}`, 'P973DT4H30M');
    });
    it('rounds to an increment of seconds', () => {
      equal(`${later.difference(earlier, { smallestUnit: 'seconds', roundingIncrement: 15 })}`, 'P973DT4H17M');
    });
    it('rounds to an increment of milliseconds', () => {
      equal(
        `${later.difference(earlier, { smallestUnit: 'milliseconds', roundingIncrement: 10 })}`,
        'P973DT4H17M4.860S'
      );
    });
    it('rounds to an increment of microseconds', () => {
      equal(
        `${later.difference(earlier, { smallestUnit: 'microseconds', roundingIncrement: 10 })}`,
        'P973DT4H17M4.864200S'
      );
    });
    it('rounds to an increment of nanoseconds', () => {
      equal(
        `${later.difference(earlier, { smallestUnit: 'nanoseconds', roundingIncrement: 10 })}`,
        'P973DT4H17M4.864197530S'
      );
    });
    it('valid hour increments divide into 24', () => {
      [1, 2, 3, 4, 6, 8, 12].forEach((roundingIncrement) => {
        const options = { smallestUnit: 'hours', roundingIncrement };
        assert(later.difference(earlier, options) instanceof Temporal.Duration);
      });
    });
    ['minutes', 'seconds'].forEach((smallestUnit) => {
      it(`valid ${smallestUnit} increments divide into 60`, () => {
        [1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30].forEach((roundingIncrement) => {
          const options = { smallestUnit, roundingIncrement };
          assert(later.difference(earlier, options) instanceof Temporal.Duration);
        });
      });
    });
    ['milliseconds', 'microseconds', 'nanoseconds'].forEach((smallestUnit) => {
      it(`valid ${smallestUnit} increments divide into 1000`, () => {
        [1, 2, 4, 5, 8, 10, 20, 25, 40, 50, 100, 125, 200, 250, 500].forEach((roundingIncrement) => {
          const options = { smallestUnit, roundingIncrement };
          assert(later.difference(earlier, options) instanceof Temporal.Duration);
        });
      });
    });
    it('throws on increments that do not divide evenly into the next highest', () => {
      throws(() => later.difference(earlier, { smallestUnit: 'hours', roundingIncrement: 11 }), RangeError);
      throws(() => later.difference(earlier, { smallestUnit: 'minutes', roundingIncrement: 29 }), RangeError);
      throws(() => later.difference(earlier, { smallestUnit: 'seconds', roundingIncrement: 29 }), RangeError);
      throws(() => later.difference(earlier, { smallestUnit: 'milliseconds', roundingIncrement: 29 }), RangeError);
      throws(() => later.difference(earlier, { smallestUnit: 'microseconds', roundingIncrement: 29 }), RangeError);
      throws(() => later.difference(earlier, { smallestUnit: 'nanoseconds', roundingIncrement: 29 }), RangeError);
    });
    it('throws on increments that are equal to the next highest', () => {
      throws(() => later.difference(earlier, { smallestUnit: 'hours', roundingIncrement: 24 }), RangeError);
      throws(() => later.difference(earlier, { smallestUnit: 'minutes', roundingIncrement: 60 }), RangeError);
      throws(() => later.difference(earlier, { smallestUnit: 'seconds', roundingIncrement: 60 }), RangeError);
      throws(() => later.difference(earlier, { smallestUnit: 'milliseconds', roundingIncrement: 1000 }), RangeError);
      throws(() => later.difference(earlier, { smallestUnit: 'microseconds', roundingIncrement: 1000 }), RangeError);
      throws(() => later.difference(earlier, { smallestUnit: 'nanoseconds', roundingIncrement: 1000 }), RangeError);
    });
    it('accepts singular units', () => {
      equal(
        `${later.difference(earlier, { largestUnit: 'year' })}`,
        `${later.difference(earlier, { largestUnit: 'years' })}`
      );
      equal(
        `${later.difference(earlier, { smallestUnit: 'year' })}`,
        `${later.difference(earlier, { smallestUnit: 'years' })}`
      );
      equal(
        `${later.difference(earlier, { largestUnit: 'month' })}`,
        `${later.difference(earlier, { largestUnit: 'months' })}`
      );
      equal(
        `${later.difference(earlier, { smallestUnit: 'month' })}`,
        `${later.difference(earlier, { smallestUnit: 'months' })}`
      );
      equal(
        `${later.difference(earlier, { largestUnit: 'day' })}`,
        `${later.difference(earlier, { largestUnit: 'days' })}`
      );
      equal(
        `${later.difference(earlier, { smallestUnit: 'day' })}`,
        `${later.difference(earlier, { smallestUnit: 'days' })}`
      );
      equal(
        `${later.difference(earlier, { largestUnit: 'hour' })}`,
        `${later.difference(earlier, { largestUnit: 'hours' })}`
      );
      equal(
        `${later.difference(earlier, { smallestUnit: 'hour' })}`,
        `${later.difference(earlier, { smallestUnit: 'hours' })}`
      );
      equal(
        `${later.difference(earlier, { largestUnit: 'minute' })}`,
        `${later.difference(earlier, { largestUnit: 'minutes' })}`
      );
      equal(
        `${later.difference(earlier, { smallestUnit: 'minute' })}`,
        `${later.difference(earlier, { smallestUnit: 'minutes' })}`
      );
      equal(
        `${later.difference(earlier, { largestUnit: 'second' })}`,
        `${later.difference(earlier, { largestUnit: 'seconds' })}`
      );
      equal(
        `${later.difference(earlier, { smallestUnit: 'second' })}`,
        `${later.difference(earlier, { smallestUnit: 'seconds' })}`
      );
      equal(
        `${later.difference(earlier, { largestUnit: 'millisecond' })}`,
        `${later.difference(earlier, { largestUnit: 'milliseconds' })}`
      );
      equal(
        `${later.difference(earlier, { smallestUnit: 'millisecond' })}`,
        `${later.difference(earlier, { smallestUnit: 'milliseconds' })}`
      );
      equal(
        `${later.difference(earlier, { largestUnit: 'microsecond' })}`,
        `${later.difference(earlier, { largestUnit: 'microseconds' })}`
      );
      equal(
        `${later.difference(earlier, { smallestUnit: 'microsecond' })}`,
        `${later.difference(earlier, { smallestUnit: 'microseconds' })}`
      );
      equal(
        `${later.difference(earlier, { largestUnit: 'nanosecond' })}`,
        `${later.difference(earlier, { largestUnit: 'nanoseconds' })}`
      );
      equal(
        `${later.difference(earlier, { smallestUnit: 'nanosecond' })}`,
        `${later.difference(earlier, { smallestUnit: 'nanoseconds' })}`
      );
    });
  });
  describe('DateTime.round works', () => {
    const dt = DateTime.from('1976-11-18T14:23:30.123456789');
    it('throws without parameter', () => {
      throws(() => dt.round(), TypeError);
    });
    it('throws without required smallestUnit parameter', () => {
      throws(() => dt.round({ roundingIncrement: 1, roundingMode: 'ceil' }), RangeError);
    });
    it('throws on disallowed or invalid smallestUnit', () => {
      ['era', 'year', 'month', 'week', 'years', 'months', 'weeks', 'nonsense'].forEach((smallestUnit) => {
        throws(() => dt.round({ smallestUnit }), RangeError);
      });
    });
    it('throws on invalid roundingMode', () => {
      throws(() => dt.round({ smallestUnit: 'second', roundingMode: 'cile' }), RangeError);
    });
    const incrementOneNearest = [
      ['day', '1976-11-19T00:00:00'],
      ['hour', '1976-11-18T14:00:00'],
      ['minute', '1976-11-18T14:24:00'],
      ['second', '1976-11-18T14:23:30'],
      ['millisecond', '1976-11-18T14:23:30.123'],
      ['microsecond', '1976-11-18T14:23:30.123457'],
      ['nanosecond', '1976-11-18T14:23:30.123456789']
    ];
    incrementOneNearest.forEach(([smallestUnit, expected]) => {
      it(`rounds to nearest ${smallestUnit}`, () =>
        equal(`${dt.round({ smallestUnit, roundingMode: 'nearest' })}`, expected));
    });
    const incrementOneCeil = [
      ['day', '1976-11-19T00:00:00'],
      ['hour', '1976-11-18T15:00:00'],
      ['minute', '1976-11-18T14:24:00'],
      ['second', '1976-11-18T14:23:31'],
      ['millisecond', '1976-11-18T14:23:30.124'],
      ['microsecond', '1976-11-18T14:23:30.123457'],
      ['nanosecond', '1976-11-18T14:23:30.123456789']
    ];
    incrementOneCeil.forEach(([smallestUnit, expected]) => {
      it(`rounds up to ${smallestUnit}`, () => equal(`${dt.round({ smallestUnit, roundingMode: 'ceil' })}`, expected));
    });
    const incrementOneFloor = [
      ['day', '1976-11-18T00:00:00'],
      ['hour', '1976-11-18T14:00:00'],
      ['minute', '1976-11-18T14:23:00'],
      ['second', '1976-11-18T14:23:30'],
      ['millisecond', '1976-11-18T14:23:30.123'],
      ['microsecond', '1976-11-18T14:23:30.123456'],
      ['nanosecond', '1976-11-18T14:23:30.123456789']
    ];
    incrementOneFloor.forEach(([smallestUnit, expected]) => {
      it(`rounds down to ${smallestUnit}`, () =>
        equal(`${dt.round({ smallestUnit, roundingMode: 'floor' })}`, expected));
      it(`truncates to ${smallestUnit}`, () => equal(`${dt.round({ smallestUnit, roundingMode: 'trunc' })}`, expected));
    });
    it('nearest is the default', () => {
      equal(`${dt.round({ smallestUnit: 'minute' })}`, '1976-11-18T14:24:00');
      equal(`${dt.round({ smallestUnit: 'second' })}`, '1976-11-18T14:23:30');
    });
    it('rounding down is towards the Big Bang, not towards 1 BCE', () => {
      const dt2 = DateTime.from('-000099-12-15T12:00:00.5Z');
      const smallestUnit = 'second';
      equal(`${dt2.round({ smallestUnit, roundingMode: 'ceil' })}`, '-000099-12-15T12:00:01');
      equal(`${dt2.round({ smallestUnit, roundingMode: 'floor' })}`, '-000099-12-15T12:00:00');
      equal(`${dt2.round({ smallestUnit, roundingMode: 'trunc' })}`, '-000099-12-15T12:00:00');
      equal(`${dt2.round({ smallestUnit, roundingMode: 'nearest' })}`, '-000099-12-15T12:00:01');
    });
    it('rounds to an increment of hours', () => {
      equal(`${dt.round({ smallestUnit: 'hour', roundingIncrement: 4 })}`, '1976-11-18T16:00:00');
    });
    it('rounds to an increment of minutes', () => {
      equal(`${dt.round({ smallestUnit: 'minute', roundingIncrement: 15 })}`, '1976-11-18T14:30:00');
    });
    it('rounds to an increment of seconds', () => {
      equal(`${dt.round({ smallestUnit: 'second', roundingIncrement: 30 })}`, '1976-11-18T14:23:30');
    });
    it('rounds to an increment of milliseconds', () => {
      equal(`${dt.round({ smallestUnit: 'millisecond', roundingIncrement: 10 })}`, '1976-11-18T14:23:30.12');
    });
    it('rounds to an increment of microseconds', () => {
      equal(`${dt.round({ smallestUnit: 'microsecond', roundingIncrement: 10 })}`, '1976-11-18T14:23:30.12346');
    });
    it('rounds to an increment of nanoseconds', () => {
      equal(`${dt.round({ smallestUnit: 'nanosecond', roundingIncrement: 10 })}`, '1976-11-18T14:23:30.12345679');
    });
    it('1 day is a valid increment', () => {
      equal(`${dt.round({ smallestUnit: 'day', roundingIncrement: 1 })}`, '1976-11-19T00:00:00');
    });
    it('valid hour increments divide into 24', () => {
      const smallestUnit = 'hour';
      [1, 2, 3, 4, 6, 8, 12].forEach((roundingIncrement) => {
        assert(dt.round({ smallestUnit, roundingIncrement }) instanceof DateTime);
      });
    });
    ['minute', 'second'].forEach((smallestUnit) => {
      it(`valid ${smallestUnit} increments divide into 60`, () => {
        [1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30].forEach((roundingIncrement) => {
          assert(dt.round({ smallestUnit, roundingIncrement }) instanceof DateTime);
        });
      });
    });
    ['millisecond', 'microsecond', 'nanosecond'].forEach((smallestUnit) => {
      it(`valid ${smallestUnit} increments divide into 1000`, () => {
        [1, 2, 4, 5, 8, 10, 20, 25, 40, 50, 100, 125, 200, 250, 500].forEach((roundingIncrement) => {
          assert(dt.round({ smallestUnit, roundingIncrement }) instanceof DateTime);
        });
      });
    });
    it('throws on increments that do not divide evenly into the next highest', () => {
      throws(() => dt.round({ smallestUnit: 'day', roundingIncrement: 29 }), RangeError);
      throws(() => dt.round({ smallestUnit: 'hour', roundingIncrement: 29 }), RangeError);
      throws(() => dt.round({ smallestUnit: 'minute', roundingIncrement: 29 }), RangeError);
      throws(() => dt.round({ smallestUnit: 'second', roundingIncrement: 29 }), RangeError);
      throws(() => dt.round({ smallestUnit: 'millisecond', roundingIncrement: 29 }), RangeError);
      throws(() => dt.round({ smallestUnit: 'microsecond', roundingIncrement: 29 }), RangeError);
      throws(() => dt.round({ smallestUnit: 'nanosecond', roundingIncrement: 29 }), RangeError);
    });
    it('throws on increments that are equal to the next highest', () => {
      throws(() => dt.round({ smallestUnit: 'hour', roundingIncrement: 24 }), RangeError);
      throws(() => dt.round({ smallestUnit: 'minute', roundingIncrement: 60 }), RangeError);
      throws(() => dt.round({ smallestUnit: 'second', roundingIncrement: 60 }), RangeError);
      throws(() => dt.round({ smallestUnit: 'millisecond', roundingIncrement: 1000 }), RangeError);
      throws(() => dt.round({ smallestUnit: 'microsecond', roundingIncrement: 1000 }), RangeError);
      throws(() => dt.round({ smallestUnit: 'nanosecond', roundingIncrement: 1000 }), RangeError);
    });
    const bal = DateTime.from('1976-11-18T23:59:59.999999999');
    ['day', 'hour', 'minute', 'second', 'millisecond', 'microsecond'].forEach((smallestUnit) => {
      it(`balances to next ${smallestUnit}`, () => {
        equal(`${bal.round({ smallestUnit })}`, '1976-11-19T00:00:00');
      });
    });
    it('accepts plural units', () => {
      assert(dt.round({ smallestUnit: 'days' }).equals(dt.round({ smallestUnit: 'day' })));
      assert(dt.round({ smallestUnit: 'hours' }).equals(dt.round({ smallestUnit: 'hour' })));
      assert(dt.round({ smallestUnit: 'minutes' }).equals(dt.round({ smallestUnit: 'minute' })));
      assert(dt.round({ smallestUnit: 'seconds' }).equals(dt.round({ smallestUnit: 'second' })));
      assert(dt.round({ smallestUnit: 'milliseconds' }).equals(dt.round({ smallestUnit: 'millisecond' })));
      assert(dt.round({ smallestUnit: 'microseconds' }).equals(dt.round({ smallestUnit: 'microsecond' })));
      assert(dt.round({ smallestUnit: 'nanoseconds' }).equals(dt.round({ smallestUnit: 'nanosecond' })));
    });
  });
  describe('DateTime.from() works', () => {
    it('DateTime.from("1976-11-18 15:23:30")', () =>
      equal(`${DateTime.from('1976-11-18 15:23:30')}`, '1976-11-18T15:23:30'));
    it('DateTime.from("1976-11-18 15:23:30.001")', () =>
      equal(`${DateTime.from('1976-11-18 15:23:30.001')}`, '1976-11-18T15:23:30.001'));
    it('DateTime.from("1976-11-18 15:23:30.001123")', () =>
      equal(`${DateTime.from('1976-11-18 15:23:30.001123')}`, '1976-11-18T15:23:30.001123'));
    it('DateTime.from("1976-11-18 15:23:30.001123456")', () =>
      equal(`${DateTime.from('1976-11-18 15:23:30.001123456')}`, '1976-11-18T15:23:30.001123456'));
    it('DateTime.from(1976-11-18) == 1976-11-18', () => {
      const orig = new DateTime(1976, 11, 18, 15, 23, 20, 123, 456, 789);
      const actual = DateTime.from(orig);
      notEqual(actual, orig);
    });
    it('DateTime.from({ year: 1976, month: 11, day: 18 }) == 1976-11-18T00:00:00', () =>
      equal(`${DateTime.from({ year: 1976, month: 11, day: 18 })}`, '1976-11-18T00:00:00'));
    it('DateTime.from({ year: 1976, month: 11, day: 18, millisecond: 123 }) == 1976-11-18T00:00:00.123', () =>
      equal(`${DateTime.from({ year: 1976, month: 11, day: 18, millisecond: 123 })}`, '1976-11-18T00:00:00.123'));
    it('DateTime.from({ month: 11, day: 18, hour: 15, minute: 23, second: 30, millisecond: 123 }) throws', () =>
      throws(
        () => DateTime.from({ month: 11, day: 18, hour: 15, minute: 23, second: 30, millisecond: 123 }),
        TypeError
      ));
    it('DateTime.from({}) throws', () => throws(() => DateTime.from({}), TypeError));
    it('DateTime.from(required prop undefined) throws', () =>
      throws(() => DateTime.from({ year: undefined, month: 11, day: 18 }), TypeError));
    it('DateTime.from(ISO string leap second) is constrained', () => {
      equal(`${DateTime.from('2016-12-31T23:59:60')}`, '2016-12-31T23:59:59');
    });
    it('DateTime.from(number) is converted to string', () =>
      assert(DateTime.from(19761118).equals(DateTime.from('19761118'))));
    describe('Overflow', () => {
      const bad = { year: 2019, month: 1, day: 32 };
      it('reject', () => throws(() => DateTime.from(bad, { overflow: 'reject' }), RangeError));
      it('constrain', () => {
        equal(`${DateTime.from(bad)}`, '2019-01-31T00:00:00');
        equal(`${DateTime.from(bad, { overflow: 'constrain' })}`, '2019-01-31T00:00:00');
      });
      it('throw when bad overflow', () => {
        [new DateTime(1976, 11, 18, 15, 23), { year: 2019, month: 1, day: 1 }, '2019-01-31T00:00'].forEach((input) => {
          ['', 'CONSTRAIN', 'balance', 3, null].forEach((overflow) =>
            throws(() => DateTime.from(input, { overflow }), RangeError)
          );
        });
      });
      const leap = { year: 2016, month: 12, day: 31, hour: 23, minute: 59, second: 60 };
      it('reject leap second', () => throws(() => DateTime.from(leap, { overflow: 'reject' }), RangeError));
      it('constrain leap second', () => equal(`${DateTime.from(leap)}`, '2016-12-31T23:59:59'));
    });
    it('variant time separators', () => {
      equal(`${DateTime.from('1976-11-18t15:23Z')}`, '1976-11-18T15:23:00');
      equal(`${DateTime.from('1976-11-18 15:23Z')}`, '1976-11-18T15:23:00');
    });
    it('any number of decimal places', () => {
      equal(`${DateTime.from('1976-11-18T15:23:30.1Z')}`, '1976-11-18T15:23:30.1');
      equal(`${DateTime.from('1976-11-18T15:23:30.12Z')}`, '1976-11-18T15:23:30.12');
      equal(`${DateTime.from('1976-11-18T15:23:30.123Z')}`, '1976-11-18T15:23:30.123');
      equal(`${DateTime.from('1976-11-18T15:23:30.1234Z')}`, '1976-11-18T15:23:30.1234');
      equal(`${DateTime.from('1976-11-18T15:23:30.12345Z')}`, '1976-11-18T15:23:30.12345');
      equal(`${DateTime.from('1976-11-18T15:23:30.123456Z')}`, '1976-11-18T15:23:30.123456');
      equal(`${DateTime.from('1976-11-18T15:23:30.1234567Z')}`, '1976-11-18T15:23:30.1234567');
      equal(`${DateTime.from('1976-11-18T15:23:30.12345678Z')}`, '1976-11-18T15:23:30.12345678');
      equal(`${DateTime.from('1976-11-18T15:23:30.123456789Z')}`, '1976-11-18T15:23:30.123456789');
    });
    it('variant decimal separator', () => {
      equal(`${DateTime.from('1976-11-18T15:23:30,12Z')}`, '1976-11-18T15:23:30.12');
    });
    it('variant minus sign', () => {
      equal(`${DateTime.from('1976-11-18T15:23:30.12\u221202:00')}`, '1976-11-18T15:23:30.12');
      equal(`${DateTime.from('\u2212009999-11-18T15:23:30.12')}`, '-009999-11-18T15:23:30.12');
    });
    it('mixture of basic and extended format', () => {
      equal(`${DateTime.from('1976-11-18T152330.1+00:00')}`, '1976-11-18T15:23:30.1');
      equal(`${DateTime.from('19761118T15:23:30.1+00:00')}`, '1976-11-18T15:23:30.1');
      equal(`${DateTime.from('1976-11-18T15:23:30.1+0000')}`, '1976-11-18T15:23:30.1');
      equal(`${DateTime.from('1976-11-18T152330.1+0000')}`, '1976-11-18T15:23:30.1');
      equal(`${DateTime.from('19761118T15:23:30.1+0000')}`, '1976-11-18T15:23:30.1');
      equal(`${DateTime.from('19761118T152330.1+00:00')}`, '1976-11-18T15:23:30.1');
      equal(`${DateTime.from('19761118T152330.1+0000')}`, '1976-11-18T15:23:30.1');
      equal(`${DateTime.from('+001976-11-18T152330.1+00:00')}`, '1976-11-18T15:23:30.1');
      equal(`${DateTime.from('+0019761118T15:23:30.1+00:00')}`, '1976-11-18T15:23:30.1');
      equal(`${DateTime.from('+001976-11-18T15:23:30.1+0000')}`, '1976-11-18T15:23:30.1');
      equal(`${DateTime.from('+001976-11-18T152330.1+0000')}`, '1976-11-18T15:23:30.1');
      equal(`${DateTime.from('+0019761118T15:23:30.1+0000')}`, '1976-11-18T15:23:30.1');
      equal(`${DateTime.from('+0019761118T152330.1+00:00')}`, '1976-11-18T15:23:30.1');
      equal(`${DateTime.from('+0019761118T152330.1+0000')}`, '1976-11-18T15:23:30.1');
    });
    it('optional parts', () => {
      equal(`${DateTime.from('1976-11-18T15:23:30+00')}`, '1976-11-18T15:23:30');
      equal(`${DateTime.from('1976-11-18T15')}`, '1976-11-18T15:00:00');
      equal(`${DateTime.from('1976-11-18')}`, '1976-11-18T00:00:00');
    });
    it('no junk at end of string', () => throws(() => DateTime.from('1976-11-18T15:23:30.123456789junk'), RangeError));
    it('options may only be an object or undefined', () => {
      [null, 1, 'hello', true, Symbol('foo'), 1n].forEach((badOptions) =>
        throws(() => DateTime.from({ year: 1976, month: 11, day: 18 }, badOptions), TypeError)
      );
      [{}, () => {}, undefined].forEach((options) =>
        equal(`${DateTime.from({ year: 1976, month: 11, day: 18 }, options)}`, '1976-11-18T00:00:00')
      );
    });
    it('object must contain at least the required correctly-spelled properties', () => {
      throws(() => DateTime.from({}), TypeError);
      throws(() => DateTime.from({ year: 1976, months: 11, day: 18 }), TypeError);
    });
    it('incorrectly-spelled properties are ignored', () => {
      equal(`${DateTime.from({ year: 1976, month: 11, day: 18, hours: 12 })}`, '1976-11-18T00:00:00');
    });
  });
  describe('Min/max range', () => {
    it('constructing from numbers', () => {
      throws(() => new DateTime(-271821, 4, 19, 0, 0, 0, 0, 0, 0), RangeError);
      throws(() => new DateTime(275760, 9, 14, 0, 0, 0, 0, 0, 0), RangeError);
      equal(`${new DateTime(-271821, 4, 19, 0, 0, 0, 0, 0, 1)}`, '-271821-04-19T00:00:00.000000001');
      equal(`${new DateTime(275760, 9, 13, 23, 59, 59, 999, 999, 999)}`, '+275760-09-13T23:59:59.999999999');
    });
    it('constructing from property bag', () => {
      const tooEarly = { year: -271821, month: 4, day: 19 };
      const tooLate = { year: 275760, month: 9, day: 14 };
      ['reject', 'constrain'].forEach((overflow) => {
        [tooEarly, tooLate].forEach((props) => {
          throws(() => DateTime.from(props, { overflow }), RangeError);
        });
      });
      equal(
        `${DateTime.from({ year: -271821, month: 4, day: 19, nanosecond: 1 })}`,
        '-271821-04-19T00:00:00.000000001'
      );
      equal(
        `${DateTime.from({
          year: 275760,
          month: 9,
          day: 13,
          hour: 23,
          minute: 59,
          second: 59,
          millisecond: 999,
          microsecond: 999,
          nanosecond: 999
        })}`,
        '+275760-09-13T23:59:59.999999999'
      );
    });
    it('constructing from ISO string', () => {
      ['reject', 'constrain'].forEach((overflow) => {
        ['-271821-04-19T00:00', '+275760-09-14T00:00'].forEach((str) => {
          throws(() => DateTime.from(str, { overflow }), RangeError);
        });
      });
      equal(`${DateTime.from('-271821-04-19T00:00:00.000000001')}`, '-271821-04-19T00:00:00.000000001');
      equal(`${DateTime.from('+275760-09-13T23:59:59.999999999')}`, '+275760-09-13T23:59:59.999999999');
    });
    it('converting from Instant', () => {
      const min = Temporal.Instant.from('-271821-04-20T00:00Z');
      const offsetMin = Temporal.TimeZone.from('-23:59');
      equal(`${offsetMin.getDateTimeFor(min, 'iso8601')}`, '-271821-04-19T00:01:00');
      const max = Temporal.Instant.from('+275760-09-13T00:00Z');
      const offsetMax = Temporal.TimeZone.from('+23:59');
      equal(`${offsetMax.getDateTimeFor(max, 'iso8601')}`, '+275760-09-13T23:59:00');
    });
    it('converting from Date and Time', () => {
      const midnight = Temporal.Time.from('00:00');
      const firstNs = Temporal.Time.from('00:00:00.000000001');
      const lastNs = Temporal.Time.from('23:59:59.999999999');
      const min = Temporal.Date.from('-271821-04-19');
      const max = Temporal.Date.from('+275760-09-13');
      throws(() => min.toDateTime(midnight), RangeError);
      throws(() => midnight.toDateTime(min), RangeError);
      equal(`${min.toDateTime(firstNs)}`, '-271821-04-19T00:00:00.000000001');
      equal(`${firstNs.toDateTime(min)}`, '-271821-04-19T00:00:00.000000001');
      equal(`${max.toDateTime(lastNs)}`, '+275760-09-13T23:59:59.999999999');
      equal(`${lastNs.toDateTime(max)}`, '+275760-09-13T23:59:59.999999999');
    });
    it('adding and subtracting beyond limit', () => {
      const min = DateTime.from('-271821-04-19T00:00:00.000000001');
      const max = DateTime.from('+275760-09-13T23:59:59.999999999');
      ['reject', 'constrain'].forEach((overflow) => {
        throws(() => min.subtract({ nanoseconds: 1 }, { overflow }), RangeError);
        throws(() => max.add({ nanoseconds: 1 }, { overflow }), RangeError);
      });
    });
    it('rounding beyond limit', () => {
      const min = DateTime.from('-271821-04-19T00:00:00.000000001');
      const max = DateTime.from('+275760-09-13T23:59:59.999999999');
      ['day', 'hour', 'minute', 'second', 'millisecond', 'microsecond'].forEach((smallestUnit) => {
        throws(() => min.round({ smallestUnit, roundingMode: 'floor' }), RangeError);
        throws(() => max.round({ smallestUnit, roundingMode: 'ceil' }), RangeError);
      });
    });
  });
  describe('dateTime.getFields() works', () => {
    const calendar = Temporal.Calendar.from('iso8601');
    const dt1 = DateTime.from({
      year: 1976,
      month: 11,
      day: 18,
      hour: 15,
      minute: 23,
      second: 30,
      millisecond: 123,
      microsecond: 456,
      nanosecond: 789,
      calendar
    });
    const fields = dt1.getFields();
    it('fields', () => {
      equal(fields.year, 1976);
      equal(fields.month, 11);
      equal(fields.day, 18);
      equal(fields.hour, 15);
      equal(fields.minute, 23);
      equal(fields.second, 30);
      equal(fields.millisecond, 123);
      equal(fields.microsecond, 456);
      equal(fields.nanosecond, 789);
      equal(fields.calendar, calendar);
    });
    it('enumerable', () => {
      const fields2 = { ...fields };
      equal(fields2.year, 1976);
      equal(fields2.month, 11);
      equal(fields2.day, 18);
      equal(fields2.hour, 15);
      equal(fields2.minute, 23);
      equal(fields2.second, 30);
      equal(fields2.millisecond, 123);
      equal(fields2.microsecond, 456);
      equal(fields2.nanosecond, 789);
      equal(fields2.calendar, calendar);
    });
    it('as input to from()', () => {
      const dt2 = DateTime.from(fields);
      equal(DateTime.compare(dt1, dt2), 0);
    });
    it('as input to with()', () => {
      const dt2 = DateTime.from('2019-06-30').with(fields);
      equal(DateTime.compare(dt1, dt2), 0);
    });
  });
  describe('dateTime.getISOFields() works', () => {
    const dt1 = DateTime.from('1976-11-18T15:23:30.123456789');
    const fields = dt1.getISOFields();
    it('fields', () => {
      equal(fields.isoYear, 1976);
      equal(fields.isoMonth, 11);
      equal(fields.isoDay, 18);
      equal(fields.hour, 15);
      equal(fields.minute, 23);
      equal(fields.second, 30);
      equal(fields.millisecond, 123);
      equal(fields.microsecond, 456);
      equal(fields.nanosecond, 789);
      equal(fields.calendar.id, 'iso8601');
    });
    it('enumerable', () => {
      const fields2 = { ...fields };
      equal(fields2.isoYear, 1976);
      equal(fields2.isoMonth, 11);
      equal(fields2.isoDay, 18);
      equal(fields2.hour, 15);
      equal(fields2.minute, 23);
      equal(fields2.second, 30);
      equal(fields2.millisecond, 123);
      equal(fields2.microsecond, 456);
      equal(fields2.nanosecond, 789);
      equal(fields2.calendar, fields.calendar);
    });
    it('as input to constructor', () => {
      const dt2 = new DateTime(
        fields.isoYear,
        fields.isoMonth,
        fields.isoDay,
        fields.hour,
        fields.minute,
        fields.second,
        fields.millisecond,
        fields.microsecond,
        fields.nanosecond,
        fields.calendar
      );
      assert(dt2.equals(dt1));
    });
  });
  describe('dateTime.withCalendar()', () => {
    const dt1 = DateTime.from('1976-11-18T15:23:30.123456789');
    it('works', () => {
      const calendar = Temporal.Calendar.from('iso8601');
      equal(`${dt1.withCalendar(calendar)}`, '1976-11-18T15:23:30.123456789');
    });
    it('casts its argument', () => {
      equal(`${dt1.withCalendar('iso8601')}`, '1976-11-18T15:23:30.123456789');
    });
  });
  describe('dateTime.toString()', () => {
    const dt1 = DateTime.from('1976-11-18T15:23');
    const dt2 = DateTime.from('1976-11-18T15:23:30');
    const dt3 = DateTime.from('1976-11-18T15:23:30.1234');
    it('default is to emit seconds and drop trailing zeros after the decimal', () => {
      equal(dt1.toString(), '1976-11-18T15:23:00');
      equal(dt2.toString(), '1976-11-18T15:23:30');
      equal(dt3.toString(), '1976-11-18T15:23:30.1234');
    });
    it('truncates to minute', () => {
      [dt1, dt2, dt3].forEach((dt) => equal(dt.toString({ smallestUnit: 'minute' }), '1976-11-18T15:23'));
    });
    it('other smallestUnits are aliases for fractional digits', () => {
      equal(dt3.toString({ smallestUnit: 'second' }), dt3.toString({ fractionalSecondDigits: 0 }));
      equal(dt3.toString({ smallestUnit: 'millisecond' }), dt3.toString({ fractionalSecondDigits: 3 }));
      equal(dt3.toString({ smallestUnit: 'microsecond' }), dt3.toString({ fractionalSecondDigits: 6 }));
      equal(dt3.toString({ smallestUnit: 'nanosecond' }), dt3.toString({ fractionalSecondDigits: 9 }));
    });
    it('throws on invalid or disallowed smallestUnit', () => {
      ['era', 'year', 'month', 'day', 'hour', 'nonsense'].forEach((smallestUnit) =>
        throws(() => dt1.toString({ smallestUnit }), RangeError)
      );
    });
    it('accepts plural units', () => {
      equal(dt3.toString({ smallestUnit: 'minutes' }), dt3.toString({ smallestUnit: 'minute' }));
      equal(dt3.toString({ smallestUnit: 'seconds' }), dt3.toString({ smallestUnit: 'second' }));
      equal(dt3.toString({ smallestUnit: 'milliseconds' }), dt3.toString({ smallestUnit: 'millisecond' }));
      equal(dt3.toString({ smallestUnit: 'microseconds' }), dt3.toString({ smallestUnit: 'microsecond' }));
      equal(dt3.toString({ smallestUnit: 'nanoseconds' }), dt3.toString({ smallestUnit: 'nanosecond' }));
    });
    it('truncates or pads to 2 places', () => {
      const options = { fractionalSecondDigits: 2 };
      equal(dt1.toString(options), '1976-11-18T15:23:00.00');
      equal(dt2.toString(options), '1976-11-18T15:23:30.00');
      equal(dt3.toString(options), '1976-11-18T15:23:30.12');
    });
    it('pads to 7 places', () => {
      const options = { fractionalSecondDigits: 7 };
      equal(dt1.toString(options), '1976-11-18T15:23:00.0000000');
      equal(dt2.toString(options), '1976-11-18T15:23:30.0000000');
      equal(dt3.toString(options), '1976-11-18T15:23:30.1234000');
    });
    it('auto is the default', () => {
      [dt1, dt2, dt3].forEach((dt) => equal(dt.toString({ fractionalSecondDigits: 'auto' }), dt.toString()));
    });
    it('throws on out of range or invalid fractionalSecondDigits', () => {
      [-1, 10, Infinity, NaN, 'not-auto'].forEach((fractionalSecondDigits) =>
        throws(() => dt1.toString({ fractionalSecondDigits }), RangeError)
      );
    });
    it('accepts and truncates fractional fractionalSecondDigits', () => {
      equal(dt3.toString({ fractionalSecondDigits: 5.5 }), '1976-11-18T15:23:30.12340');
    });
    it('smallestUnit overrides fractionalSecondDigits', () => {
      equal(dt3.toString({ smallestUnit: 'minute', fractionalSecondDigits: 9 }), '1976-11-18T15:23');
    });
    it('throws on invalid roundingMode', () => {
      throws(() => dt1.toString({ roundingMode: 'cile' }), RangeError);
    });
    it('rounds to nearest', () => {
      equal(dt2.toString({ smallestUnit: 'minute', roundingMode: 'nearest' }), '1976-11-18T15:24');
      equal(dt3.toString({ fractionalSecondDigits: 3, roundingMode: 'nearest' }), '1976-11-18T15:23:30.123');
    });
    it('rounds up', () => {
      equal(dt2.toString({ smallestUnit: 'minute', roundingMode: 'ceil' }), '1976-11-18T15:24');
      equal(dt3.toString({ fractionalSecondDigits: 3, roundingMode: 'ceil' }), '1976-11-18T15:23:30.124');
    });
    it('rounds down', () => {
      ['floor', 'trunc'].forEach((roundingMode) => {
        equal(dt2.toString({ smallestUnit: 'minute', roundingMode }), '1976-11-18T15:23');
        equal(dt3.toString({ fractionalSecondDigits: 3, roundingMode }), '1976-11-18T15:23:30.123');
      });
    });
    it('rounding down is towards the Big Bang, not towards 1 BCE', () => {
      const dt4 = DateTime.from('-000099-12-15T12:00:00.5');
      equal(dt4.toString({ smallestUnit: 'second', roundingMode: 'floor' }), '-000099-12-15T12:00:00');
    });
    it('rounding can affect all units', () => {
      const dt5 = DateTime.from('1999-12-31T23:59:59.999999999');
      equal(dt5.toString({ fractionalSecondDigits: 8, roundingMode: 'nearest' }), '2000-01-01T00:00:00.00000000');
    });
    it('options may only be an object or undefined', () => {
      [null, 1, 'hello', true, Symbol('foo'), 1n].forEach((badOptions) =>
        throws(() => dt1.toString(badOptions), TypeError)
      );
      [{}, () => {}, undefined].forEach((options) => equal(dt1.toString(options), '1976-11-18T15:23:00'));
    });
  });
});

import { normalize } from 'path';
if (normalize(import.meta.url.slice(8)) === normalize(process.argv[1])) {
  report(reporter).then((failed) => process.exit(failed ? 1 : 0));
}
