// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/gregoriancalendar_isLeapYear_basic.phpt
  it("IntlGregorianCalendar::isLeapYear(): basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"nl\");\ndate_default_timezone_set('Europe/Amsterdam');\n$intlcal = new IntlGregorianCalendar();\nvar_dump($intlcal->isLeapYear(2012));\nvar_dump($intlcal->isLeapYear(1900));\nvar_dump(intlgregcal_is_leap_year($intlcal, 2012));\nvar_dump(intlgregcal_is_leap_year($intlcal, 1900));\n?>")).toMatchSnapshot();
  });
});
