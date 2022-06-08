// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_getXMaximum_basic.phpt
  it("IntlCalendar::getMaximum(), ::getActualMaximum(), ::getLeastMaximum() basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"nl\");\n$intlcal = IntlCalendar::createInstance('UTC');\n$intlcal->setTime(strtotime('2012-02-29 05:06:07 +0000') * 1000);\nvar_dump(\n        $intlcal->getLeastMaximum(IntlCalendar::FIELD_DAY_OF_MONTH),\n        intlcal_get_least_maximum($intlcal, IntlCalendar::FIELD_DAY_OF_MONTH),\n        $intlcal->getActualMaximum(IntlCalendar::FIELD_DAY_OF_MONTH),\n        intlcal_get_actual_maximum($intlcal, IntlCalendar::FIELD_DAY_OF_MONTH),\n        $intlcal->getMaximum(IntlCalendar::FIELD_DAY_OF_MONTH),\n        intlcal_get_maximum($intlcal, IntlCalendar::FIELD_DAY_OF_MONTH)\n);\n?>")).toMatchSnapshot();
  });
});
