// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_getMinimalDaysInFirstWeek_error.phpt
  it("IntlCalendar::getMinimalDaysInFirstWeek(): bad arguments", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nvar_dump(intlcal_get_minimal_days_in_first_week(1));\n?>")).toMatchSnapshot();
  });
});
