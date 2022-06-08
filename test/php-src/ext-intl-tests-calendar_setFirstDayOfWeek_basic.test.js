// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_setFirstDayOfWeek_basic.phpt
  it("IntlCalendar::setFirstDayOfWeek() basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"nl\");\n$intlcal = IntlCalendar::createInstance('UTC');\nvar_dump(\n        IntlCalendar::DOW_TUESDAY,\n        $intlcal->setFirstDayOfWeek(IntlCalendar::DOW_TUESDAY),\n        $intlcal->getFirstDayOfWeek(),\n        intlcal_set_first_day_of_week($intlcal, IntlCalendar::DOW_WEDNESDAY),\n        $intlcal->getFirstDayOfWeek()\n);\n?>")).toMatchSnapshot();
  });
});
