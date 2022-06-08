// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_getDayOfWeekType_basic.phpt
  it("IntlCalendar::getDayOfWeekType() basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"nl\");\n$intlcal = IntlCalendar::createInstance('UTC');\n$intlcal->setTime(strtotime('2012-02-29 00:00:00 +0000') * 1000);\nvar_dump(\n        intlcal_get_day_of_week_type($intlcal, IntlCalendar::DOW_SUNDAY),\n        $intlcal->getDayOfWeekType(IntlCalendar::DOW_MONDAY),\n        $intlcal->getDayOfWeekType(IntlCalendar::DOW_TUESDAY),\n        $intlcal->getDayOfWeekType(IntlCalendar::DOW_FRIDAY),\n        $intlcal->getDayOfWeekType(IntlCalendar::DOW_SATURDAY)\n);\n?>")).toMatchSnapshot();
  });
});
