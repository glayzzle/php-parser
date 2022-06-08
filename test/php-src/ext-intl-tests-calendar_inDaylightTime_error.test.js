// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_inDaylightTime_error.phpt
  it("IntlCalendar::inDaylightTime(): bad arguments", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nvar_dump(intlcal_in_daylight_time(1));\n?>")).toMatchSnapshot();
  });
});
