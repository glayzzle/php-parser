// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/rfc-datetime_and_daylight_saving_time-type3-bd1.phpt
  it("RFC: DateTime and Daylight Saving Time Transitions (zone type 3, bd1)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('America/New_York');\n$date_format = 'Y-m-d H:i:s T e';\n$interval_format = 'P%dDT%hH';\n/*\n * Backward Transitions, diff().\n */\n$end   = new DateTime('2010-11-07 05:30:00');\n$start = new DateTime('2010-11-06 04:30:00');\necho 'bd1 ' . $end->format($date_format) . ' - ' . $start->format($date_format)\n    . ' = ' . $start->diff($end)->format($interval_format) . \"\\n\";\n$end   = new DateTime('2010-11-07 04:30:00');\n$start = new DateTime('2010-11-06 04:30:00');\necho 'bd2 ' . $end->format($date_format) . ' - ' . $start->format($date_format)\n    . ' = ' . $start->diff($end)->format($interval_format) . \"\\n\";\n$end   = new DateTime('2010-11-07 03:30:00');\n$start = new DateTime('2010-11-06 04:30:00');\necho 'bd3 ' . $end->format($date_format) . ' - ' . $start->format($date_format)\n    . ' = ' . $start->diff($end)->format($interval_format) . \"\\n\";\n$end   = new DateTime('2010-11-07 02:30:00');\n$start = new DateTime('2010-11-06 04:30:00');\necho 'bd4 ' . $end->format($date_format) . ' - ' . $start->format($date_format)\n    . ' = ' . $start->diff($end)->format($interval_format) . \"\\n\";\n$end   = new DateTime('2010-11-07 01:30:00');\n$start = new DateTime('2010-11-06 01:30:00');\necho 'bd7 ' . $end->format($date_format) . ' - ' . $start->format($date_format)\n    . ' = ' . $start->diff($end)->format($interval_format) . \"\\n\";\necho \"\\n\";\n?>")).toMatchSnapshot();
  });
});
