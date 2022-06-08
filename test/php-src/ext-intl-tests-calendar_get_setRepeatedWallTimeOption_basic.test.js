// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_get_setRepeatedWallTimeOption_basic.phpt
  it("IntlCalendar::get/setRepeatedWallTimeOption(): basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"nl\");\ndate_default_timezone_set('Europe/Amsterdam');\n//28 October 2012, transition from DST\n$intlcal = new IntlGregorianCalendar(2012, 9, 28, 0, 0, 0);\nvar_dump($intlcal->setRepeatedWallTimeOption(IntlCalendar::WALLTIME_LAST));\nvar_dump($intlcal->getRepeatedWallTimeOption());\n$intlcal->set(IntlCalendar::FIELD_HOUR_OF_DAY, 2);\n$intlcal->set(IntlCalendar::FIELD_MINUTE, 30);\nvar_dump(\n    strtotime('2012-10-28 02:30:00 +0100'),\n    (int)($intlcal->getTime() /1000)\n);\nvar_dump(intlcal_set_repeated_wall_time_option($intlcal, IntlCalendar::WALLTIME_FIRST));\nvar_dump(intlcal_get_repeated_wall_time_option($intlcal));\n$intlcal->set(IntlCalendar::FIELD_HOUR_OF_DAY, 2);\n$intlcal->set(IntlCalendar::FIELD_MINUTE, 30);\nvar_dump(\n    strtotime('2012-10-28 02:30:00 +0200'),\n    (int)($intlcal->getTime() /1000)\n);\n?>")).toMatchSnapshot();
  });
});
