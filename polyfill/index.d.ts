export namespace Temporal {
  export type ComparisonResult = -1 | 0 | 1;
  type RoundingMode = 'nearest' | 'ceil' | 'trunc' | 'floor';
  type ConstructorOf<T> = new (...args: unknown[]) => T;

  /**
   * Options for assigning fields using `with()` or entire objects with
   * `from()`.
   * */
  export type AssignmentOptions = {
    /**
     * How to deal with out-of-range values
     *
     * - In `'constrain'` mode, out-of-range values are clamped to the nearest
     *   in-range value.
     * - In `'reject'` mode, out-of-range values will cause the function to
     *   throw a RangeError.
     *
     * The default is `'constrain'`.
     */
    overflow: 'constrain' | 'reject';
  };

  /**
   * Options for assigning fields using `Duration.prototype.with()` or entire
   * objects with `Duration.from()`, and for arithmetic with
   * `Duration.prototype.add()` and `Duration.prototype.subtract()`.
   * */
  export type DurationOptions = {
    /**
     * How to deal with out-of-range values
     *
     * - In `'constrain'` mode, out-of-range values are clamped to the nearest
     *   in-range value.
     * - In `'balance'` mode, out-of-range values are resolved by balancing them
     *   with the next highest unit.
     *
     * The default is `'constrain'`.
     */
    overflow: 'constrain' | 'balance';
  };

  /**
   * Options for conversions of `Temporal.DateTime` to `Temporal.Instant`
   * */
  export type ToInstantOptions = {
    /**
     * Controls handling of invalid or ambiguous times caused by time zone
     * offset changes like Daylight Saving time (DST) transitions.
     *
     * This option is only relevant if a `DateTime` value does not exist in the
     * destination time zone (e.g. near "Spring Forward" DST transitions), or
     * exists more than once (e.g. near "Fall Back" DST transitions).
     *
     * In case of ambiguous or non-existent times, this option controls what
     * exact time to return:
     * - `'compatible'`: Equivalent to `'earlier'` for backward transitions like
     *   the start of DST in the Spring, and `'later'` for forward transitions
     *   like the end of DST in the Fall. This matches the behavior of legacy
     *   `Date`, of libraries like moment.js, Luxon, or date-fns, and of
     *   cross-platform standards like [RFC 5545
     *   (iCalendar)](https://tools.ietf.org/html/rfc5545).
     * - `'earlier'`: The earlier time of two possible times
     * - `'later'`: The later of two possible times
     * - `'reject'`: Throw a RangeError instead
     *
     * The default is `'compatible'`.
     *
     * */
    disambiguation: 'compatible' | 'earlier' | 'later' | 'reject';
  };

  type OffsetDisambiguationOptions = {
    /**
     * Time zone definitions can change. If an application stores data about
     * events in the future, then stored data about future events may become
     * ambiguous, for example if a country permanently abolishes DST. The
     * `offset` option controls this unusual case.
     *
     * - `'use'` always uses the offset (if it's provided) to calculate the
     *   instant. This ensures that the result will match the instant that was
     *   originally stored, even if local clock time is different.
     * - `'prefer'` uses the offset if it's valid for the date/time in this time
     *   zone, but if it's not valid then the time zone will be used as a
     *   fallback to calculate the instant.
     * - `'ignore'` will disregard any provided offset. Instead, the time zone
     *    and date/time value are used to calculate the instant. This will keep
     *    local clock time unchanged but may result in a different real-world
     *    instant.
     * - `'reject'` acts like `'prefer'`, except it will throw a RangeError if
     *   the offset is not valid for the given time zone identifier and
     *   date/time value.
     *
     * If the ISO string ends in 'Z' then this option is ignored because there
     * is no possibility of ambiguity.
     *
     * If a time zone offset is not present in the input, then this option is
     * ignored because the time zone will always be used to calculate the
     * offset.
     *
     * If the offset is not used, and if the date/time and time zone don't
     * uniquely identify a single instant, then the `disambiguation` option will
     * be used to choose the correct instant. However, if the offset is used
     * then the `disambiguation` option will be ignored.
     */
    offset: 'use' | 'prefer' | 'ignore' | 'reject';
  };

  export type ZonedDateTimeAssignmentOptions = Partial<
    AssignmentOptions & ToInstantOptions & OffsetDisambiguationOptions
  >;

  /**
   * Options for arithmetic operations like `add()` and `subtract()`
   * */
  export type ArithmeticOptions = {
    /**
     * Controls handling of out-of-range arithmetic results.
     *
     * If a result is out of range, then `'constrain'` will clamp the result to
     * the allowed range, while `'reject'` will throw a RangeError.
     *
     * The default is `'constrain'`.
     */
    overflow: 'constrain' | 'reject';
  };

  /**
   * Options for outputting precision in toString() on types with seconds
   */
  export type ToStringOptions = {
    fractionalSecondDigits?: 'auto' | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    smallestUnit?:
      | 'minute'
      | 'second'
      | 'millisecond'
      | 'microsecond'
      | 'nanosecond'
      | /** @deprecated */ 'minutes'
      | /** @deprecated */ 'seconds'
      | /** @deprecated */ 'milliseconds'
      | /** @deprecated */ 'microseconds'
      | /** @deprecated */ 'nanoseconds';

    /**
     * Controls how rounding is performed:
     * - `nearest`: Round to the nearest of the values allowed by
     *   `roundingIncrement` and `smallestUnit`. When there is a tie, round up.
     *   This mode is the default.
     * - `ceil`: Always round up, towards the end of time.
     * - `trunc`: Always round down, towards the beginning of time.
     * - `floor`: Also round down, towards the beginning of time. This mode acts
     *   the same as `trunc`, but it's included for consistency with
     *   `Temporal.Duration.round()` where negative values are allowed and
     *   `trunc` rounds towards zero, unlike `floor` which rounds towards
     *   negative infinity which is usually unexpected. For this reason, `trunc`
     *   is recommended for most use cases.
     */
    roundingMode?: RoundingMode;
  };

  /**
   * Options to control the result of `until()` and `since()` methods in
   * `Temporal` types.
   */
  export interface DifferenceOptions<T extends string> {
    /**
     * The largest unit to allow in the resulting `Temporal.Duration` object.
     *
     * Valid values may include `'years'`, `'months'`, `'days'`, `'hours'`,
     * `'minutes'`, `'seconds'`, `'milliseconds'`, `'microseconds'`,
     * `'nanoseconds'` and `'auto'`, although some types may throw an exception
     * if a value is used that would produce an invalid result. For example,
     * `hours` is not accepted by `Date.prototype.since()`.
     *
     * The default is always `'auto'`, though the meaning of this depends on the
     * type being used.
     */
    largestUnit?: 'auto' | T;

    /**
     * The unit to round to. For example, to round to the nearest minute, use
     * `smallestUnit: 'minute'`. This option is required for `round()` and
     * optional for `until()` and `since()`.
     */
    smallestUnit?: T;

    /**
     * Allows rounding to an integer number of units. For example, to round to
     * increments of a half hour, use `{ smallestUnit: 'minute',
     * roundingIncrement: 30 }`.
     */
    roundingIncrement?: number;

    /**
     * Controls how rounding is performed:
     * - `nearest`: Round to the nearest of the values allowed by
     *   `roundingIncrement` and `smallestUnit`. When there is a tie, round away
     *   from zero like `ceil` for positive durations and like `floor` for
     *   negative durations. This mode is the default.
     * - `ceil`: Always round up, towards the end of time.
     * - `trunc`: Always round down, towards the beginning of time.
     * - `floor`: Also round down, towards the beginning of time. This mode acts
     *   the same as `trunc`, but it's included for consistency with
     *   `Temporal.Duration.round()` where negative values are allowed and
     *   `trunc` rounds towards zero, unlike `floor` which rounds towards
     *   negative infinity which is usually unexpected. For this reason, `trunc`
     *   is recommended for most use cases.
     */
    roundingMode?: RoundingMode;
  }

  /**
   * Options to control rounding behavior
   */
  export interface RoundOptions<T extends string> {
    /**
     * The unit to round to. For example, to round to the nearest minute, use
     * `smallestUnit: 'minute'`. This option is required.
     */
    smallestUnit: T;

    /**
     * Allows rounding to an integer number of units. For example, to round to
     * increments of a half hour, use `{ smallestUnit: 'minute',
     * roundingIncrement: 30 }`.
     */
    roundingIncrement?: number;

    /**
     * Controls how rounding is performed:
     * - `nearest`: Round to the nearest of the values allowed by
     *   `roundingIncrement` and `smallestUnit`. When there is a tie, round up.
     *   This mode is the default.
     * - `ceil`: Always round up, towards the end of time.
     * - `trunc`: Always round down, towards the beginning of time.
     * - `floor`: Also round down, towards the beginning of time. This mode acts
     *   the same as `trunc`, but it's included for consistency with
     *   `Temporal.Duration.round()` where negative values are allowed and
     *   `trunc` rounds towards zero, unlike `floor` which rounds towards
     *   negative infinity which is usually unexpected. For this reason, `trunc`
     *   is recommended for most use cases.
     */
    roundingMode?: 'nearest' | 'ceil' | 'trunc' | 'floor';
  }

  export interface DurationRoundOptions {
    /**
     * The largest unit to allow in the resulting `Temporal.Duration` object.
     *
     * Valid values may include `'years'`, `'months'`, `'days'`, `'hours'`,
     * `'minutes'`, `'seconds'`, `'milliseconds'`, `'microseconds'`,
     * `'nanoseconds'` and `'auto'`.
     *
     * The default is `'auto'`, which means "the largest nonzero unit in the
     * input duration". This default prevents expanding durations to larger
     * units unless the caller opts into this behavior.
     *
     * If `smallestUnit` is larger, then `smallestUnit` will be used as
     * `largestUnit`, superseding a caller-supplied or default value.
     */
    largestUnit:
      | 'auto'
      | 'years'
      | 'months'
      | 'weeks'
      | 'days'
      | 'hours'
      | 'minutes'
      | 'seconds'
      | 'milliseconds'
      | 'microseconds'
      | 'nanoseconds'
      | /** @deprecated */ 'year'
      | /** @deprecated */ 'month'
      | /** @deprecated */ 'day'
      | /** @deprecated */ 'hour'
      | /** @deprecated */ 'minute'
      | /** @deprecated */ 'second'
      | /** @deprecated */ 'millisecond'
      | /** @deprecated */ 'microsecond'
      | /** @deprecated */ 'nanosecond';

    /**
     * The unit to round to. For example, to round to the nearest minute, use
     * `smallestUnit: 'minute'`. This option is required.
     */
    smallestUnit:
      | 'years'
      | 'months'
      | 'weeks'
      | 'days'
      | 'hours'
      | 'minutes'
      | 'seconds'
      | 'milliseconds'
      | 'microseconds'
      | 'nanoseconds'
      | /** @deprecated */ 'year'
      | /** @deprecated */ 'month'
      | /** @deprecated */ 'day'
      | /** @deprecated */ 'hour'
      | /** @deprecated */ 'minute'
      | /** @deprecated */ 'second'
      | /** @deprecated */ 'millisecond'
      | /** @deprecated */ 'microsecond'
      | /** @deprecated */ 'nanosecond';

    /**
     * Allows rounding to an integer number of units. For example, to round to
     * increments of a half hour, use `{ smallestUnit: 'minute',
     * roundingIncrement: 30 }`.
     */
    roundingIncrement?: number;

    /**
     * Controls how rounding is performed:
     * - `nearest`: Round to the nearest of the values allowed by
     *   `roundingIncrement` and `smallestUnit`. When there is a tie, round away
     *   from zero like `ceil` for positive durations and like `floor` for
     *   negative durations. This mode is the default.
     * - `ceil`: Always round towards positive infinity. For negative durations
     *   this option will decrease the absolute value of the duration which may
     *   be unexpected. To round away from zero, use `ceil` for positive
     *   durations and `floor` for negative durations.
     * - `trunc`: Always round down towards zero.
     * - `floor`: Always round towards negative infinity. This mode acts the
     *   same as `trunc` for positive durations but for negative durations it
     *   will increase the absolute value of the result which may be unexpected.
     *   For this reason, `trunc` is recommended for most "round down" use
     *   cases.
     */
    roundingMode?: 'nearest' | 'ceil' | 'trunc' | 'floor';

    /**
     * The starting point to use for rounding and conversions when
     * variable-length units (years, months, weeks depending on the calendar)
     * are involved. This option is required if any of the following are true:
     * - `unit` is `'weeks'` or larger units
     * - `this` has a nonzero value for `weeks` or larger units
     *
     * This value must be either a `Temporal.DateTime`, a
     * `Temporal.ZonedDateTime`, or a string or object value that can be passed
     * to `from()` of those types. Examples:
     * - `'2020-01'01T00:00-08:00[America/Los_Angeles]'`
     * - `'2020-01'01'`
     * - `Temporal.Date.from('2020-01-01')`
     *
     * `Temporal.ZonedDateTime` will be tried first because it's more
     * specific, with `Temporal.DateTime` as a fallback.
     *
     * If the value resolves to a `Temporal.ZonedDateTime`, then operation will
     * adjust for DST and other time zone transitions. Otherwise (including if
     * this option is omitted), then the operation will ignore time zone
     * transitions and all days will be assumed to be 24 hours long.
     */
    relativeTo?: Temporal.DateTime | DateTimeLike | string;
  }

  /**
   * Options to control behavior of `Duration.prototype.total()`
   */
  export interface DurationTotalOptions {
    /**
     * The unit to convert the duration to. This option is required.
     */
    unit:
      | 'years'
      | 'months'
      | 'weeks'
      | 'days'
      | 'hours'
      | 'minutes'
      | 'seconds'
      | 'milliseconds'
      | 'microseconds'
      | 'nanoseconds'
      | /** @deprecated */ 'year'
      | /** @deprecated */ 'month'
      | /** @deprecated */ 'day'
      | /** @deprecated */ 'hour'
      | /** @deprecated */ 'minute'
      | /** @deprecated */ 'second'
      | /** @deprecated */ 'millisecond'
      | /** @deprecated */ 'microsecond'
      | /** @deprecated */ 'nanosecond';

    /**
     * The starting point to use when variable-length units (years, months,
     * weeks depending on the calendar) are involved. This option is required if
     * any of the following are true:
     * - `unit` is `'weeks'` or larger units
     * - `this` has a nonzero value for `weeks` or larger units
     *
     * This value must be either a `Temporal.DateTime`, a
     * `Temporal.ZonedDateTime`, or a string or object value that can be passed
     * to `from()` of those types. Examples:
     * - `'2020-01'01T00:00-08:00[America/Los_Angeles]'`
     * - `'2020-01'01'`
     * - `Temporal.Date.from('2020-01-01')`
     *
     * `Temporal.ZonedDateTime` will be tried first because it's more
     * specific, with `Temporal.DateTime` as a fallback.
     *
     * If the value resolves to a `Temporal.ZonedDateTime`, then operation will
     * adjust for DST and other time zone transitions. Otherwise (including if
     * this option is omitted), then the operation will ignore time zone
     * transitions and all days will be assumed to be 24 hours long.
     */
    relativeTo?: Temporal.DateTime | DateTimeLike | string;
  }

  export type DurationLike = {
    years?: number;
    months?: number;
    weeks?: number;
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
    milliseconds?: number;
    microseconds?: number;
    nanoseconds?: number;
  };

  type DurationFields = Required<DurationLike>;

  /**
   *
   * A `Temporal.Duration` represents an immutable duration of time which can be
   * used in date/time arithmetic.
   *
   * See https://tc39.es/proposal-temporal/docs/duration.html for more details.
   */
  export class Duration implements DurationFields {
    static from(item: Temporal.Duration | DurationLike | string): Temporal.Duration;
    constructor(
      years?: number,
      months?: number,
      weeks?: number,
      days?: number,
      hours?: number,
      minutes?: number,
      seconds?: number,
      milliseconds?: number,
      microseconds?: number,
      nanoseconds?: number
    );
    readonly sign: -1 | 0 | 1;
    readonly blank: boolean;
    readonly years: number;
    readonly months: number;
    readonly weeks: number;
    readonly days: number;
    readonly hours: number;
    readonly minutes: number;
    readonly seconds: number;
    readonly milliseconds: number;
    readonly microseconds: number;
    readonly nanoseconds: number;
    negated(): Temporal.Duration;
    abs(): Temporal.Duration;
    with(durationLike: DurationLike): Temporal.Duration;
    add(other: Temporal.Duration | DurationLike | string, options?: DurationRoundOptions): Temporal.Duration;
    subtract(other: Temporal.Duration | DurationLike | string, options?: DurationRoundOptions): Temporal.Duration;
    round(options: DurationRoundOptions): Temporal.Duration;
    total(options: DurationTotalOptions): number;
    getFields(): DurationFields;
    toLocaleString(locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
    toJSON(): string;
    toString(): string;
  }

  /**
   * A `Temporal.Instant` is an exact point in time, with a precision in
   * nanoseconds. No time zone or calendar information is present. Therefore,
   * `Temporal.Instant` has no concept of days, months, or even hours.
   *
   * For convenience of interoperability, it internally uses nanoseconds since
   * the {@link https://en.wikipedia.org/wiki/Unix_time|Unix epoch} (midnight
   * UTC on January 1, 1970). However, a `Temporal.Instant` can be created from
   * any of several expressions that refer to a single point in time, including
   * an {@link https://en.wikipedia.org/wiki/ISO_8601|ISO 8601 string} with a
   * time zone offset such as '2020-01-23T17:04:36.491865121-08:00'.
   *
   * See https://tc39.es/proposal-temporal/docs/instant.html for more details.
   */
  export class Instant {
    static fromEpochSeconds(epochSeconds: number): Temporal.Instant;
    static fromEpochMilliseconds(epochMilliseconds: number): Temporal.Instant;
    static fromEpochMicroseconds(epochMicroseconds: bigint): Temporal.Instant;
    static fromEpochNanoseconds(epochNanoseconds: bigint): Temporal.Instant;
    static from(item: Temporal.Instant | string): Temporal.Instant;
    static compare(one: Temporal.Instant | string, two: Temporal.Instant | string): ComparisonResult;
    constructor(epochNanoseconds: bigint);
    readonly epochSeconds: number;
    readonly epochMilliseconds: number;
    readonly epochMicroseconds: bigint;
    readonly epochNanoseconds: bigint;
    equals(other: Temporal.Instant | string): boolean;
    add(durationLike: Temporal.Duration | DurationLike | string): Temporal.Instant;
    subtract(durationLike: Temporal.Duration | DurationLike | string): Temporal.Instant;
    until(
      other: Temporal.Instant | string,
      options?: DifferenceOptions<
        | 'hours'
        | 'minutes'
        | 'seconds'
        | 'milliseconds'
        | 'microseconds'
        | 'nanoseconds'
        | /** @deprecated */ 'hour'
        | /** @deprecated */ 'minute'
        | /** @deprecated */ 'second'
        | /** @deprecated */ 'millisecond'
        | /** @deprecated */ 'microsecond'
        | /** @deprecated */ 'nanosecond'
      >
    ): Temporal.Duration;
    since(
      other: Temporal.Instant | string,
      options?: DifferenceOptions<
        | 'hours'
        | 'minutes'
        | 'seconds'
        | 'milliseconds'
        | 'microseconds'
        | 'nanoseconds'
        | /** @deprecated */ 'hour'
        | /** @deprecated */ 'minute'
        | /** @deprecated */ 'second'
        | /** @deprecated */ 'millisecond'
        | /** @deprecated */ 'microsecond'
        | /** @deprecated */ 'nanosecond'
      >
    ): Temporal.Duration;
    round(
      options: RoundOptions<
        | 'hour'
        | 'minute'
        | 'second'
        | 'millisecond'
        | 'microsecond'
        | 'nanosecond'
        | /** @deprecated */ 'hours'
        | /** @deprecated */ 'minutes'
        | /** @deprecated */ 'seconds'
        | /** @deprecated */ 'milliseconds'
        | /** @deprecated */ 'microseconds'
        | /** @deprecated */ 'nanoseconds'
      >
    ): Temporal.Instant;
    toDateTime(tzLike: TimeZoneProtocol | string, calendar: CalendarProtocol | string): Temporal.DateTime;
    toDateTimeISO(tzLike: TimeZoneProtocol | string): Temporal.DateTime;
    toZonedDateTime(tzLike: TimeZoneProtocol | string, calendar: CalendarProtocol | string): Temporal.ZonedDateTime;
    toZonedDateTimeISO(tzLike: TimeZoneProtocol | string): Temporal.ZonedDateTime;
    toLocaleString(locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
    toJSON(): string;
    toString(tzLike?: TimeZoneProtocol | string, options?: ToStringOptions): string;
    valueOf(): never;
  }

  export interface CalendarProtocol {
    id?: string;
    calendar?: never;
    year(date: Temporal.Date | Temporal.DateTime | Temporal.YearMonth | DateLike | string): number;
    month(date: Temporal.Date | Temporal.DateTime | Temporal.YearMonth | Temporal.MonthDay | DateLike | string): number;
    day(date: Temporal.Date | Temporal.DateTime | Temporal.MonthDay | DateLike | string): number;
    era(date: Temporal.Date | Temporal.DateTime | DateLike | string): string | undefined;
    dayOfWeek?(date: Temporal.Date | Temporal.DateTime | DateLike | string): number;
    dayOfYear?(date: Temporal.Date | Temporal.DateTime | DateLike | string): number;
    weekOfYear?(date: Temporal.Date | Temporal.DateTime | DateLike | string): number;
    daysInWeek?(date: Temporal.Date | Temporal.DateTime | DateLike | string): number;
    daysInMonth?(date: Temporal.Date | Temporal.DateTime | Temporal.YearMonth | DateLike | string): number;
    daysInYear?(date: Temporal.Date | Temporal.DateTime | Temporal.YearMonth | DateLike | string): number;
    monthsInYear?(date: Temporal.Date | Temporal.DateTime | Temporal.YearMonth | DateLike | string): number;
    inLeapYear?(date: Temporal.Date | Temporal.DateTime | Temporal.YearMonth | DateLike | string): boolean;
    dateFromFields(
      fields: { year: number; month: number; day: number },
      options: AssignmentOptions,
      constructor: ConstructorOf<Temporal.Date>
    ): Temporal.Date;
    yearMonthFromFields(
      fields: { year: number; month: number },
      options: AssignmentOptions,
      constructor: ConstructorOf<Temporal.YearMonth>
    ): Temporal.YearMonth;
    monthDayFromFields(
      fields: { month: number; day: number },
      options: AssignmentOptions,
      constructor: ConstructorOf<Temporal.MonthDay>
    ): Temporal.MonthDay;
    dateAdd?(
      date: Temporal.Date | DateLike | string,
      duration: Temporal.Duration | DurationLike | string,
      options: ArithmeticOptions,
      constructor: ConstructorOf<Temporal.Date>
    ): Temporal.Date;
    dateSubtract?(
      date: Temporal.Date | DateLike | string,
      duration: Temporal.Duration | DurationLike | string,
      options: ArithmeticOptions,
      constructor: ConstructorOf<Temporal.Date>
    ): Temporal.Date;
    dateUntil?(
      one: Temporal.Date | DateLike | string,
      two: Temporal.Date | DateLike | string,
      options: DifferenceOptions<
        | 'years'
        | 'months'
        | 'weeks'
        | 'days'
        | /** @deprecated */ 'year'
        | /** @deprecated */ 'month'
        | /** @deprecated */ 'day'
      >
    ): Temporal.Duration;
    fields?(fields: Array<string>): Array<string>;
    toString(): string;
  }

  /**
   * A `Temporal.Calendar` is a representation of a calendar system. It includes
   * information about how many days are in each year, how many months are in
   * each year, how many days are in each month, and how to do arithmetic in\
   * that calendar system.
   *
   * See https://tc39.es/proposal-temporal/docs/calendar.html for more details.
   */
  export class Calendar implements Omit<Required<CalendarProtocol>, 'calendar'> {
    static from(item: CalendarProtocol | string): Temporal.Calendar;
    constructor(calendarIdentifier: string);
    readonly id: string;
    year(date: Temporal.Date | Temporal.DateTime | Temporal.YearMonth | DateLike | string): number;
    month(date: Temporal.Date | Temporal.DateTime | Temporal.YearMonth | Temporal.MonthDay | DateLike | string): number;
    day(date: Temporal.Date | Temporal.DateTime | Temporal.MonthDay | DateLike | string): number;
    era(date: Temporal.Date | Temporal.DateTime | DateLike | string): string | undefined;
    dayOfWeek(date: Temporal.Date | Temporal.DateTime | DateLike | string): number;
    dayOfYear(date: Temporal.Date | Temporal.DateTime | DateLike | string): number;
    weekOfYear(date: Temporal.Date | Temporal.DateTime | DateLike | string): number;
    daysInWeek(date: Temporal.Date | Temporal.DateTime | DateLike | string): number;
    daysInMonth(date: Temporal.Date | Temporal.DateTime | Temporal.YearMonth | DateLike | string): number;
    daysInYear(date: Temporal.Date | Temporal.DateTime | Temporal.YearMonth | DateLike | string): number;
    monthsInYear(date: Temporal.Date | Temporal.DateTime | Temporal.YearMonth | DateLike | string): number;
    inLeapYear(date: Temporal.Date | Temporal.DateTime | Temporal.YearMonth | DateLike | string): boolean;
    dateFromFields(
      fields: { year: number; month: number; day: number },
      options: AssignmentOptions,
      constructor: ConstructorOf<Temporal.Date>
    ): Temporal.Date;
    yearMonthFromFields(
      fields: { year: number; month: number },
      options: AssignmentOptions,
      constructor: ConstructorOf<Temporal.YearMonth>
    ): Temporal.YearMonth;
    monthDayFromFields(
      fields: { month: number; day: number },
      options: AssignmentOptions,
      constructor: ConstructorOf<Temporal.MonthDay>
    ): Temporal.MonthDay;
    dateAdd(
      date: Temporal.Date | DateLike | string,
      duration: Temporal.Duration | DurationLike | string,
      options: ArithmeticOptions,
      constructor: ConstructorOf<Temporal.Date>
    ): Temporal.Date;
    dateSubtract(
      date: Temporal.Date | DateLike | string,
      duration: Temporal.Duration | DurationLike | string,
      options: ArithmeticOptions,
      constructor: ConstructorOf<Temporal.Date>
    ): Temporal.Date;
    dateUntil(
      one: Temporal.Date | DateLike | string,
      two: Temporal.Date | DateLike | string,
      options?: DifferenceOptions<
        | 'years'
        | 'months'
        | 'weeks'
        | 'days'
        | /** @deprecated */ 'year'
        | /** @deprecated */ 'month'
        | /** @deprecated */ 'day'
      >
    ): Temporal.Duration;
    fields(fields: Array<string>): Array<string>;
    toString(): string;
  }

  export type DateLike = {
    year?: number;
    month?: number;
    day?: number;
    calendar?: CalendarProtocol | string;
  };

  type DateFields = {
    year: number;
    month: number;
    day: number;
    calendar: CalendarProtocol;
  };

  type DateISOFields = {
    isoYear: number;
    isoMonth: number;
    isoDay: number;
    calendar: CalendarProtocol;
  };

  /**
   * A `Temporal.Date` represents a calendar date. "Calendar date" refers to the
   * concept of a date as expressed in everyday usage, independent of any time
   * zone. For example, it could be used to represent an event on a calendar
   * which happens during the whole day no matter which time zone it's happening
   * in.
   *
   * See https://tc39.es/proposal-temporal/docs/date.html for more details.
   */
  export class Date implements DateFields {
    static from(item: Temporal.Date | DateLike | string, options?: AssignmentOptions): Temporal.Date;
    static compare(one: Temporal.Date | DateLike | string, two: Temporal.Date | DateLike | string): ComparisonResult;
    constructor(isoYear: number, isoMonth: number, isoDay: number, calendar?: CalendarProtocol);
    readonly year: number;
    readonly month: number;
    readonly day: number;
    readonly calendar: CalendarProtocol;
    readonly dayOfWeek: number;
    readonly dayOfYear: number;
    readonly weekOfYear: number;
    readonly daysInWeek: number;
    readonly daysInYear: number;
    readonly daysInMonth: number;
    readonly monthsInYear: number;
    readonly inLeapYear: boolean;
    equals(other: Temporal.Date | DateLike | string): boolean;
    with(dateLike: DateLike | string, options?: AssignmentOptions): Temporal.Date;
    withCalendar(calendar: CalendarProtocol | string): Temporal.Date;
    add(durationLike: Temporal.Duration | DurationLike | string, options?: ArithmeticOptions): Temporal.Date;
    subtract(durationLike: Temporal.Duration | DurationLike | string, options?: ArithmeticOptions): Temporal.Date;
    until(
      other: Temporal.Date | DateLike | string,
      options?: DifferenceOptions<
        | 'years'
        | 'months'
        | 'weeks'
        | 'days'
        | /** @deprecated */ 'year'
        | /** @deprecated */ 'month'
        | /** @deprecated */ 'day'
      >
    ): Temporal.Duration;
    since(
      other: Temporal.Date | DateLike | string,
      options?: DifferenceOptions<
        | 'years'
        | 'months'
        | 'weeks'
        | 'days'
        | /** @deprecated */ 'year'
        | /** @deprecated */ 'month'
        | /** @deprecated */ 'day'
      >
    ): Temporal.Duration;
    toDateTime(temporalTime?: Temporal.Time | TimeLike | string): Temporal.DateTime;
    toZonedDateTime(
      timeZone: TimeZoneProtocol | string,
      temporalTime?: Temporal.Time | TimeLike | string,
      options?: ToInstantOptions
    ): Temporal.ZonedDateTime;
    toYearMonth(): Temporal.YearMonth;
    toMonthDay(): Temporal.MonthDay;
    getFields(): DateFields;
    getISOFields(): DateISOFields;
    toLocaleString(locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
    toJSON(): string;
    toString(): string;
    valueOf(): never;
  }

  export type DateTimeLike = {
    year?: number;
    month?: number;
    day?: number;
    hour?: number;
    minute?: number;
    second?: number;
    millisecond?: number;
    microsecond?: number;
    nanosecond?: number;
    calendar?: CalendarProtocol | string;
  };

  type DateTimeFields = {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
    millisecond: number;
    microsecond: number;
    nanosecond: number;
    calendar: CalendarProtocol;
  };

  type DateTimeISOFields = {
    isoYear: number;
    isoMonth: number;
    isoDay: number;
    hour: number;
    minute: number;
    second: number;
    millisecond: number;
    microsecond: number;
    nanosecond: number;
    calendar: CalendarProtocol;
  };

  /**
   * A `Temporal.DateTime` represents a calendar date and wall-clock time, with
   * a precision in nanoseconds, and without any time zone. Of the Temporal
   * classes carrying human-readable time information, it is the most general
   * and complete one. `Temporal.Date`, `Temporal.Time`, `Temporal.YearMonth`,
   * and `Temporal.MonthDay` all carry less information and should be used when
   * complete information is not required.
   *
   * See https://tc39.es/proposal-temporal/docs/datetime.html for more details.
   */
  export class DateTime implements DateTimeFields {
    static from(item: Temporal.DateTime | DateTimeLike | string, options?: AssignmentOptions): Temporal.DateTime;
    static compare(
      one: Temporal.DateTime | DateTimeLike | string,
      two: Temporal.DateTime | DateTimeLike | string
    ): ComparisonResult;
    constructor(
      isoYear: number,
      isoMonth: number,
      isoDay: number,
      hour?: number,
      minute?: number,
      second?: number,
      millisecond?: number,
      microsecond?: number,
      nanosecond?: number,
      calendar?: CalendarProtocol
    );
    readonly year: number;
    readonly month: number;
    readonly day: number;
    readonly hour: number;
    readonly minute: number;
    readonly second: number;
    readonly millisecond: number;
    readonly microsecond: number;
    readonly nanosecond: number;
    readonly calendar: CalendarProtocol;
    readonly dayOfWeek: number;
    readonly dayOfYear: number;
    readonly weekOfYear: number;
    readonly daysInWeek: number;
    readonly daysInYear: number;
    readonly daysInMonth: number;
    readonly monthsInYear: number;
    readonly inLeapYear: boolean;
    equals(other: Temporal.DateTime | DateTimeLike | string): boolean;
    with(dateTimeLike: DateTimeLike | string, options?: AssignmentOptions): Temporal.DateTime;
    withCalendar(calendar: CalendarProtocol | string): Temporal.DateTime;
    add(durationLike: Temporal.Duration | DurationLike | string, options?: ArithmeticOptions): Temporal.DateTime;
    subtract(durationLike: Temporal.Duration | DurationLike | string, options?: ArithmeticOptions): Temporal.DateTime;
    until(
      other: Temporal.DateTime | DateTimeLike | string,
      options?: DifferenceOptions<
        | 'years'
        | 'months'
        | 'weeks'
        | 'days'
        | 'hours'
        | 'minutes'
        | 'seconds'
        | 'milliseconds'
        | 'microseconds'
        | 'nanoseconds'
        | /** @deprecated */ 'year'
        | /** @deprecated */ 'month'
        | /** @deprecated */ 'day'
        | /** @deprecated */ 'hour'
        | /** @deprecated */ 'minute'
        | /** @deprecated */ 'second'
        | /** @deprecated */ 'millisecond'
        | /** @deprecated */ 'microsecond'
        | /** @deprecated */ 'nanosecond'
      >
    ): Temporal.Duration;
    since(
      other: Temporal.DateTime | DateTimeLike | string,
      options?: DifferenceOptions<
        | 'years'
        | 'months'
        | 'weeks'
        | 'days'
        | 'hours'
        | 'minutes'
        | 'seconds'
        | 'milliseconds'
        | 'microseconds'
        | 'nanoseconds'
        | /** @deprecated */ 'year'
        | /** @deprecated */ 'month'
        | /** @deprecated */ 'day'
        | /** @deprecated */ 'hour'
        | /** @deprecated */ 'minute'
        | /** @deprecated */ 'second'
        | /** @deprecated */ 'millisecond'
        | /** @deprecated */ 'microsecond'
        | /** @deprecated */ 'nanosecond'
      >
    ): Temporal.Duration;
    round(
      options: RoundOptions<
        | 'day'
        | 'hour'
        | 'minute'
        | 'second'
        | 'millisecond'
        | 'microsecond'
        | 'nanosecond'
        | /** @deprecated */ 'days'
        | /** @deprecated */ 'hours'
        | /** @deprecated */ 'minutes'
        | /** @deprecated */ 'seconds'
        | /** @deprecated */ 'milliseconds'
        | /** @deprecated */ 'microseconds'
        | /** @deprecated */ 'nanoseconds'
      >
    ): Temporal.DateTime;
    toInstant(tzLike: TimeZoneProtocol | string, options?: ToInstantOptions): Temporal.Instant;
    toZonedDateTime(tzLike: TimeZoneProtocol | string, options?: ToInstantOptions): Temporal.ZonedDateTime;
    toDate(): Temporal.Date;
    toYearMonth(): Temporal.YearMonth;
    toMonthDay(): Temporal.MonthDay;
    toTime(): Temporal.Time;
    getFields(): DateTimeFields;
    getISOFields(): DateTimeISOFields;
    toLocaleString(locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
    toJSON(): string;
    toString(options?: ToStringOptions): string;
    valueOf(): never;
  }

  export type MonthDayLike = {
    month?: number;
    day?: number;
    calendar?: CalendarProtocol | string;
  };

  type MonthDayFields = {
    month: number;
    day: number;
    calendar: CalendarProtocol;
  };

  /**
   * A `Temporal.MonthDay` represents a particular day on the calendar, but
   * without a year. For example, it could be used to represent a yearly
   * recurring event, like "Bastille Day is on the 14th of July."
   *
   * See https://tc39.es/proposal-temporal/docs/monthday.html for more details.
   */
  export class MonthDay implements MonthDayFields {
    static from(item: Temporal.MonthDay | MonthDayLike | string, options?: AssignmentOptions): Temporal.MonthDay;
    constructor(isoMonth: number, isoDay: number, calendar?: CalendarProtocol, referenceISOYear?: number);
    readonly month: number;
    readonly day: number;
    readonly calendar: CalendarProtocol;
    equals(other: Temporal.MonthDay | MonthDayLike | string): boolean;
    with(monthDayLike: MonthDayLike, options?: AssignmentOptions): Temporal.MonthDay;
    toDateInYear(year: number | { year: number }, options?: AssignmentOptions): Temporal.Date;
    getFields(): MonthDayFields;
    getISOFields(): DateISOFields;
    toLocaleString(locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
    toJSON(): string;
    toString(): string;
    valueOf(): never;
  }

  export type TimeLike = {
    hour?: number;
    minute?: number;
    second?: number;
    millisecond?: number;
    microsecond?: number;
    nanosecond?: number;
  };

  type TimeFields = {
    hour: number;
    minute: number;
    second: number;
    millisecond: number;
    microsecond: number;
    nanosecond: number;
  };

  /**
   * A `Temporal.Time` represents a wall-clock time, with a precision in
   * nanoseconds, and without any time zone. "Wall-clock time" refers to the
   * concept of a time as expressed in everyday usage — the time that you read
   * off the clock on the wall. For example, it could be used to represent an
   * event that happens daily at a certain time, no matter what time zone.
   *
   * `Temporal.Time` refers to a time with no associated calendar date; if you
   * need to refer to a specific time on a specific day, use
   * `Temporal.DateTime`. A `Temporal.Time` can be converted into a
   * `Temporal.DateTime` by combining it with a `Temporal.Date` using the
   * `toDateTime()` method.
   *
   * See https://tc39.es/proposal-temporal/docs/time.html for more details.
   */
  export class Time implements TimeFields {
    static from(item: Temporal.Time | TimeLike | string, options?: AssignmentOptions): Temporal.Time;
    static compare(one: Temporal.Time | TimeLike | string, two: Temporal.Time | TimeLike | string): ComparisonResult;
    constructor(
      hour?: number,
      minute?: number,
      second?: number,
      millisecond?: number,
      microsecond?: number,
      nanosecond?: number
    );
    readonly hour: number;
    readonly minute: number;
    readonly second: number;
    readonly millisecond: number;
    readonly microsecond: number;
    readonly nanosecond: number;
    equals(other: Temporal.Time | TimeLike | string): boolean;
    with(timeLike: Temporal.Time | TimeLike, options?: AssignmentOptions): Temporal.Time;
    add(
      durationLike: Temporal.Time | Temporal.Duration | DurationLike | string,
      options?: ArithmeticOptions
    ): Temporal.Time;
    subtract(
      durationLike: Temporal.Time | Temporal.Duration | DurationLike | string,
      options?: ArithmeticOptions
    ): Temporal.Time;
    until(
      other: Temporal.Time | TimeLike | string,
      options?: DifferenceOptions<
        | 'hours'
        | 'minutes'
        | 'seconds'
        | 'milliseconds'
        | 'microseconds'
        | 'nanoseconds'
        | /** @deprecated */ 'hours'
        | /** @deprecated */ 'minutes'
        | /** @deprecated */ 'seconds'
        | /** @deprecated */ 'milliseconds'
        | /** @deprecated */ 'microseconds'
        | /** @deprecated */ 'nanoseconds'
      >
    ): Temporal.Duration;
    since(
      other: Temporal.Time | TimeLike | string,
      options?: DifferenceOptions<
        | 'hours'
        | 'minutes'
        | 'seconds'
        | 'milliseconds'
        | 'microseconds'
        | 'nanoseconds'
        | /** @deprecated */ 'hours'
        | /** @deprecated */ 'minutes'
        | /** @deprecated */ 'seconds'
        | /** @deprecated */ 'milliseconds'
        | /** @deprecated */ 'microseconds'
        | /** @deprecated */ 'nanoseconds'
      >
    ): Temporal.Duration;
    round(
      options: RoundOptions<
        | 'hour'
        | 'minute'
        | 'second'
        | 'millisecond'
        | 'microsecond'
        | 'nanosecond'
        | /** @deprecated */ 'hours'
        | /** @deprecated */ 'minutes'
        | /** @deprecated */ 'seconds'
        | /** @deprecated */ 'milliseconds'
        | /** @deprecated */ 'microseconds'
        | /** @deprecated */ 'nanoseconds'
      >
    ): Temporal.Time;
    toDateTime(temporalDate: Temporal.Date | DateLike | string): Temporal.DateTime;
    toZonedDateTime(
      timeZoneLike: TimeZoneProtocol | string,
      temporalDate: Temporal.Date | DateLike | string,
      options?: ToInstantOptions
    ): Temporal.ZonedDateTime;
    getFields(): TimeFields;
    toLocaleString(locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
    toJSON(): string;
    toString(options?: ToStringOptions): string;
    valueOf(): never;
  }

  /**
   * A plain object implementing the protocol for a custom time zone.
   */
  export interface TimeZoneProtocol {
    id?: string;
    timeZone?: never;
    getOffsetNanosecondsFor(instant: Temporal.Instant | string): number;
    getOffsetStringFor?(instant: Temporal.Instant | string): string;
    getDateTimeFor?(instant: Temporal.Instant | string, calendar?: CalendarProtocol | string): Temporal.DateTime;
    getInstantFor?(dateTime: Temporal.DateTime | DateTimeLike | string, options?: ToInstantOptions): Temporal.Instant;
    getNextTransition?(startingPoint: Temporal.Instant | string): Temporal.Instant | null;
    getPreviousTransition?(startingPoint: Temporal.Instant | string): Temporal.Instant | null;
    getPossibleInstantsFor(dateTime: Temporal.DateTime | DateTimeLike | string): Temporal.Instant[];
    toString(): string;
    toJSON?(): string;
  }

  /**
   * A `Temporal.TimeZone` is a representation of a time zone: either an
   * {@link https://www.iana.org/time-zones|IANA time zone}, including
   * information about the time zone such as the offset between the local time
   * and UTC at a particular time, and daylight saving time (DST) changes; or
   * simply a particular UTC offset with no DST.
   *
   * Since `Temporal.Instant` and `Temporal.DateTime` do not contain any time
   * zone information, a `Temporal.TimeZone` object is required to convert
   * between the two.
   *
   * See https://tc39.es/proposal-temporal/docs/timezone.html for more details.
   */
  export class TimeZone implements Omit<Required<TimeZoneProtocol>, 'timeZone'> {
    static from(timeZone: Temporal.TimeZone | string): Temporal.TimeZone;
    constructor(timeZoneIdentifier: string);
    readonly id: string;
    getOffsetNanosecondsFor(instant: Temporal.Instant | string): number;
    getOffsetStringFor(instant: Temporal.Instant | string): string;
    getDateTimeFor(instant: Temporal.Instant | string, calendar?: CalendarProtocol | string): Temporal.DateTime;
    getInstantFor(dateTime: Temporal.DateTime | DateTimeLike | string, options?: ToInstantOptions): Temporal.Instant;
    getNextTransition(startingPoint: Temporal.Instant | string): Temporal.Instant | null;
    getPreviousTransition(startingPoint: Temporal.Instant | string): Temporal.Instant | null;
    getPossibleInstantsFor(dateTime: Temporal.DateTime | DateTimeLike | string): Temporal.Instant[];
    toString(): string;
    toJSON(): string;
  }

  export type YearMonthLike = {
    year?: number;
    month?: number;
    calendar?: CalendarProtocol | string;
  };

  type YearMonthFields = {
    year: number;
    month: number;
    calendar: CalendarProtocol;
  };

  /**
   * A `Temporal.YearMonth` represents a particular month on the calendar. For
   * example, it could be used to represent a particular instance of a monthly
   * recurring event, like "the June 2019 meeting".
   *
   * See https://tc39.es/proposal-temporal/docs/yearmonth.html for more details.
   */
  export class YearMonth implements YearMonthFields {
    static from(item: Temporal.YearMonth | YearMonthLike | string, options?: AssignmentOptions): Temporal.YearMonth;
    static compare(
      one: Temporal.YearMonth | YearMonthLike | string,
      two: Temporal.YearMonth | YearMonthLike | string
    ): ComparisonResult;
    constructor(isoYear: number, isoMonth: number, calendar?: CalendarProtocol, referenceISODay?: number);
    readonly year: number;
    readonly month: number;
    readonly calendar: CalendarProtocol;
    readonly daysInMonth: number;
    readonly daysInYear: number;
    readonly monthsInYear: number;
    readonly inLeapYear: boolean;
    equals(other: Temporal.YearMonth | YearMonthLike | string): boolean;
    with(yearMonthLike: YearMonthLike, options?: AssignmentOptions): Temporal.YearMonth;
    add(durationLike: Temporal.Duration | DurationLike | string, options?: ArithmeticOptions): Temporal.YearMonth;
    subtract(durationLike: Temporal.Duration | DurationLike | string, options?: ArithmeticOptions): Temporal.YearMonth;
    until(
      other: Temporal.YearMonth | YearMonthLike | string,
      options?: DifferenceOptions<'years' | 'months' | /** @deprecated */ 'year' | /** @deprecated */ 'month'>
    ): Temporal.Duration;
    since(
      other: Temporal.YearMonth | YearMonthLike | string,
      options?: DifferenceOptions<'years' | 'months' | /** @deprecated */ 'year' | /** @deprecated */ 'month'>
    ): Temporal.Duration;
    toDateOnDay(day: number): Temporal.Date;
    getFields(): YearMonthFields;
    getISOFields(): DateISOFields;
    toLocaleString(locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
    toJSON(): string;
    toString(): string;
    valueOf(): never;
  }

  export type ZonedDateTimeLike = {
    year?: number;
    month?: number;
    day?: number;
    hour?: number;
    minute?: number;
    second?: number;
    millisecond?: number;
    microsecond?: number;
    nanosecond?: number;
    offset?: string;
    timeZone?: TimeZoneProtocol | string;
    calendar?: CalendarProtocol | string;
  };

  type ZonedDateTimeFields = {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
    millisecond: number;
    microsecond: number;
    nanosecond: number;
    offset: string;
    timeZone: TimeZoneProtocol;
    calendar: CalendarProtocol;
  };

  type ZonedDateTimeISOFields = {
    isoYear: number;
    isoMonth: number;
    isoDay: number;
    hour: number;
    minute: number;
    second: number;
    millisecond: number;
    microsecond: number;
    nanosecond: number;
    offsetNanoseconds: number;
    timeZone: TimeZoneProtocol;
    calendar: CalendarProtocol;
  };

  export class ZonedDateTime {
    static from(
      item: Temporal.ZonedDateTime | ZonedDateTimeLike | string,
      options?: ZonedDateTimeAssignmentOptions
    ): ZonedDateTime;
    static compare(
      one: Temporal.ZonedDateTime | ZonedDateTimeLike | string,
      two: Temporal.ZonedDateTime | ZonedDateTimeLike | string
    ): ComparisonResult;
    constructor(epochNanoseconds: bigint, timeZone: TimeZoneProtocol | string, calendar?: CalendarProtocol | string);
    readonly year: number;
    readonly month: number;
    readonly day: number;
    readonly hour: number;
    readonly minute: number;
    readonly second: number;
    readonly millisecond: number;
    readonly microsecond: number;
    readonly nanosecond: number;
    readonly timeZone: TimeZoneProtocol;
    readonly calendar: CalendarProtocol;
    readonly dayOfWeek: number;
    readonly dayOfYear: number;
    readonly weekOfYear: number;
    readonly hoursInDay: number;
    readonly daysInWeek: number;
    readonly daysInMonth: number;
    readonly daysInYear: number;
    readonly monthsInYear: number;
    readonly inLeapYear: boolean;
    readonly startOfDay: Temporal.ZonedDateTime;
    readonly offsetNanoseconds: number;
    readonly offset: string;
    readonly epochSeconds: number;
    readonly epochMilliseconds: number;
    readonly epochMicroseconds: bigint;
    readonly epochNanoseconds: bigint;
    equals(other: Temporal.ZonedDateTime | ZonedDateTimeLike | string): boolean;
    with(
      zonedDateTimeLike: ZonedDateTimeLike | string,
      options?: ZonedDateTimeAssignmentOptions
    ): Temporal.ZonedDateTime;
    withCalendar(calendar: CalendarProtocol | string): Temporal.ZonedDateTime;
    withTimeZone(timeZone: TimeZoneProtocol | string): Temporal.ZonedDateTime;
    add(durationLike: Temporal.Duration | DurationLike | string, options?: ArithmeticOptions): Temporal.ZonedDateTime;
    subtract(
      durationLike: Temporal.Duration | DurationLike | string,
      options?: ArithmeticOptions
    ): Temporal.ZonedDateTime;
    until(
      other: Temporal.ZonedDateTime | ZonedDateTimeLike | string,
      options?: Temporal.DifferenceOptions<
        | 'years'
        | 'months'
        | 'weeks'
        | 'days'
        | 'hours'
        | 'minutes'
        | 'seconds'
        | 'milliseconds'
        | 'microseconds'
        | 'nanoseconds'
        | /** @deprecated */ 'year'
        | /** @deprecated */ 'month'
        | /** @deprecated */ 'day'
        | /** @deprecated */ 'hour'
        | /** @deprecated */ 'minute'
        | /** @deprecated */ 'second'
        | /** @deprecated */ 'millisecond'
        | /** @deprecated */ 'microsecond'
        | /** @deprecated */ 'nanosecond'
      >
    ): Temporal.Duration;
    since(
      other: Temporal.ZonedDateTime | ZonedDateTimeLike | string,
      options?: Temporal.DifferenceOptions<
        | 'years'
        | 'months'
        | 'weeks'
        | 'days'
        | 'hours'
        | 'minutes'
        | 'seconds'
        | 'milliseconds'
        | 'microseconds'
        | 'nanoseconds'
        | /** @deprecated */ 'year'
        | /** @deprecated */ 'month'
        | /** @deprecated */ 'day'
        | /** @deprecated */ 'hour'
        | /** @deprecated */ 'minute'
        | /** @deprecated */ 'second'
        | /** @deprecated */ 'millisecond'
        | /** @deprecated */ 'microsecond'
        | /** @deprecated */ 'nanosecond'
      >
    ): Temporal.Duration;
    round(
      options: Temporal.RoundOptions<
        | 'day'
        | 'hour'
        | 'minute'
        | 'second'
        | 'millisecond'
        | 'microsecond'
        | 'nanosecond'
        | /** @deprecated */ 'days'
        | /** @deprecated */ 'hours'
        | /** @deprecated */ 'minutes'
        | /** @deprecated */ 'seconds'
        | /** @deprecated */ 'milliseconds'
        | /** @deprecated */ 'microseconds'
        | /** @deprecated */ 'nanoseconds'
      >
    ): Temporal.ZonedDateTime;
    toInstant(): Temporal.Instant;
    toDateTime(): Temporal.DateTime;
    toDate(): Temporal.Date;
    toYearMonth(): Temporal.YearMonth;
    toMonthDay(): Temporal.MonthDay;
    toTime(): Temporal.Time;
    getFields(): ZonedDateTimeFields;
    getISOFields(): ZonedDateTimeISOFields;
    toLocaleString(locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
    toJSON(): string;
    toString(): string;
    valueOf(): never;
  }

  /**
   * The `Temporal.now` object has several methods which give information about
   * the current date, time, and time zone.
   *
   * See https://tc39.es/proposal-temporal/docs/now.html for more details.
   */
  export namespace now {
    /**
     * Get the exact system date and time as a `Temporal.Instant`.
     *
     * This method gets the current exact system time, without regard to
     * calendar or time zone. This is a good way to get a timestamp for an
     * event, for example. It works like the old-style JavaScript `Date.now()`,
     * but with nanosecond precision instead of milliseconds.
     *
     * Note that a `Temporal.Instant` doesn't know about time zones. For the
     * exact time in a specific time zone, use `Temporal.now.zonedDateTimeISO`
     * or `Temporal.now.zonedDateTime`.
     * */
    export function instant(): Temporal.Instant;

    /**
     * Get the current calendar date and clock time in a specific calendar and
     * time zone.
     *
     * The calendar is required. When using the ISO 8601 calendar or if you
     * don't understand the need for or implications of a calendar, then a more
     * ergonomic alternative to this method is `Temporal.now.zonedDateTimeISO`.
     *
     * Note that the `Temporal.DateTime` type does not persist the time zone,
     * but retaining the time zone is required for most time-zone-related use
     * cases. Therefore, it's usually recommended to use
     * `Temporal.now.zonedDateTimeISO` or `Temporal.now.zonedDateTime` instead
     * of this function.
     *
     * @param {Temporal.Calendar | string} [calendar] - calendar identifier, or
     * a `Temporal.Calendar` instance, or an object implementing the calendar
     * protocol.
     * @param {TimeZoneProtocol | string} [tzLike] -
     * {@link https://en.wikipedia.org/wiki/List_of_tz_database_time_zones|IANA time zone identifier}
     * string (e.g. `'Europe/London'`), `Temporal.TimeZone` instance, or an
     * object implementing the time zone protocol. If omitted,
     * the environment's current time zone will be used.
     */
    export function dateTime(
      calendar: CalendarProtocol | string,
      tzLike?: TimeZoneProtocol | string
    ): Temporal.DateTime;

    /**
     * Get the current date and clock time in a specific time zone, using the
     * ISO 8601 calendar.
     *
     * Note that the `Temporal.DateTime` type does not persist the time zone,
     * but retaining the time zone is required for most time-zone-related use
     * cases. Therefore, it's usually recommended to use
     * `Temporal.now.zonedDateTimeISO` instead of this function.
     *
     * @param {Temporal.Calendar | string} [calendar] - calendar identifier, or
     * a `Temporal.Calendar` instance, or an object implementing the calendar
     * protocol.
     * @param {TimeZoneProtocol | string} [tzLike] -
     * {@link https://en.wikipedia.org/wiki/List_of_tz_database_time_zones|IANA time zone identifier}
     * string (e.g. `'Europe/London'`), `Temporal.TimeZone` instance, or an
     * object implementing the time zone protocol. If omitted, the environment's
     * current time zone will be used.
     */
    export function dateTimeISO(tzLike?: TimeZoneProtocol | string): Temporal.DateTime;

    /**
     * Get the current calendar date in a specific time zone.
     *
     * @param {Temporal.Calendar | string} [calendar] - calendar identifier, or
     * a `Temporal.Calendar` instance, or an object implementing the calendar
     * protocol.
     * @param {TimeZoneProtocol | string} [tzLike] -
     * {@link https://en.wikipedia.org/wiki/List_of_tz_database_time_zones|IANA time zone identifier}
     * string (e.g. `'Europe/London'`), `Temporal.TimeZone` instance, or an
     * object implementing the time zone protocol. If omitted,
     * the environment's current time zone will be used.
     */
    export function date(calendar: CalendarProtocol | string, tzLike?: TimeZoneProtocol | string): Temporal.Date;

    /**
     * Get the current date in a specific time zone, using the ISO 8601
     * calendar.
     *
     * @param {Temporal.Calendar | string} [calendar] - calendar identifier, or
     * a `Temporal.Calendar` instance, or an object implementing the calendar
     * protocol.
     * @param {TimeZoneProtocol | string} [tzLike] -
     * {@link https://en.wikipedia.org/wiki/List_of_tz_database_time_zones|IANA time zone identifier}
     * string (e.g. `'Europe/London'`), `Temporal.TimeZone` instance, or an
     * object implementing the time zone protocol. If omitted, the environment's
     * current time zone will be used.
     */
    export function dateISO(tzLike?: TimeZoneProtocol | string): Temporal.Date;

    /**
     * Get the current clock time in a specific time zone.
     *
     * @param {TimeZoneProtocol | string} [tzLike] -
     * {@link https://en.wikipedia.org/wiki/List_of_tz_database_time_zones|IANA time zone identifier}
     * string (e.g. `'Europe/London'`), `Temporal.TimeZone` instance, or an
     * object implementing the time zone protocol. If omitted, the environment's
     * current time zone will be used.
     */
    export function timeISO(tzLike?: TimeZoneProtocol | string): Temporal.Time;

    /**
     * Get the environment's current time zone.
     *
     * This method gets the current system time zone. This will usually be a
     * named
     * {@link https://en.wikipedia.org/wiki/List_of_tz_database_time_zones|IANA time zone}.
     */
    export function timeZone(): Temporal.TimeZone;
  }
}
