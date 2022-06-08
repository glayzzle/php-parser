// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_getXMinimum_basic.phpt
  it("IntlCalendar::getMinimum(), ::getActualMinimum(), ::getGreatestMinimum() basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"nl\");\n$intlcal = IntlCalendar::createInstance('UTC');\n$intlcal->setTime(strtotime('2012-02-29 05:06:07 +0000') * 1000);\nvar_dump(\n        $intlcal->getGreatestMinimum(IntlCalendar::FIELD_DAY_OF_MONTH),\n        intlcal_get_greatest_minimum($intlcal, IntlCalendar::FIELD_DAY_OF_MONTH),\n        $intlcal->getActualMinimum(IntlCalendar::FIELD_DAY_OF_MONTH),\n        intlcal_get_actual_minimum($intlcal, IntlCalendar::FIELD_DAY_OF_MONTH),\n        $intlcal->getMinimum(IntlCalendar::FIELD_DAY_OF_MONTH),\n        intlcal_get_minimum($intlcal, IntlCalendar::FIELD_DAY_OF_MONTH)\n);\n?>")).toMatchSnapshot();
  });
});
