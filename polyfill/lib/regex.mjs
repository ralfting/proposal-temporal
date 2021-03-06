const tzComponent = /\.[-A-Za-z_]|\.\.[-A-Za-z._]{1,12}|\.[-A-Za-z_][-A-Za-z._]{0,12}|[A-Za-z_][-A-Za-z._]{0,13}/;
export const timeZoneID = new RegExp(`(?:${tzComponent.source}(?:\\/(?:${tzComponent.source}))*|Etc/GMT[-+]\\d{1,2})`);

const calComponent = /[A-Za-z0-9]{3,8}/;
export const calendarID = new RegExp(`(?:${calComponent.source}(?:-${calComponent.source})*)`);

const yearpart = /(?:[+\u2212-]\d{6}|\d{4})/;
export const datesplit = new RegExp(`(${yearpart.source})(?:-(\\d{2})-(\\d{2})|(\\d{2})(\\d{2}))`);
const timesplit = /(\d{2})(?::(\d{2})(?::(\d{2})(?:[.,](\d{1,9}))?)?|(\d{2})(?:(\d{2})(?:[.,](\d{1,9}))?)?)?/;
export const offset = /([+\u2212-])([0-2][0-9])(?::?([0-5][0-9])(?::?([0-5][0-9])(?:[.,](\d{1,9}))?)?)?/;
const zonesplit = new RegExp(`(?:([zZ])|(?:${offset.source})?(?:\\[(${timeZoneID.source})\\])?)`);
const calendar = new RegExp(`\\[c=(${calendarID.source})\\]`);

export const instant = new RegExp(
  `^${datesplit.source}(?:T|\\s+)${timesplit.source}${zonesplit.source}(?:${calendar.source})?$`,
  'i'
);
export const datetime = new RegExp(
  `^${datesplit.source}(?:(?:T|\\s+)${timesplit.source}(?:${zonesplit.source})?)?(?:${calendar.source})?$`,
  'i'
);

export const time = new RegExp(`^${timesplit.source}(?:${zonesplit.source})?(?:${calendar.source})?$`, 'i');

// The short forms of YearMonth and MonthDay are only for the ISO calendar.
// Non-ISO calendar YearMonth and MonthDay have to parse as a Temporal.Date,
// with the reference fields.
// YYYYMM forbidden by ISO 8601, but since it is not ambiguous with anything
// else we could parse in a YearMonth context, we allow it
export const yearmonth = new RegExp(`^(${yearpart.source})-?(\\d{2})$`);
export const monthday = /^(?:--)?(\d{2})-?(\d{2})$/;

export const duration = /^([+\u2212-])?P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?(?:T(?!$)(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)(?:[.,](\d{1,9}))?S)?)?$/i;
