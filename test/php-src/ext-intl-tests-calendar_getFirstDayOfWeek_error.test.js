// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_getFirstDayOfWeek_error.phpt
  it("IntlCalendar::getFirstDayOfWeek(): bad arguments", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nvar_dump(intlcal_get_first_day_of_week(1));\n?>")).toMatchSnapshot();
  });
});
