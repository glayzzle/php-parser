// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/gregoriancalendar_isLeapYear_error.phpt
  it("IntlGregorianCalendar::isLeapYear(): bad arguments", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nvar_dump(intlgregcal_is_leap_year(1, 2));\n?>")).toMatchSnapshot();
  });
});
