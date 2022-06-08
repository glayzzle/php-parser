// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_add_basic.phpt
  it("IntlCalendar::add() basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"nl\");\n$time = strtotime('2012-02-29 00:00:00 +0000');\n$time2 = strtotime('2012-03-01 05:06:07 +0000');\n$intlcal = IntlCalendar::createInstance('UTC');\n$intlcal->setTime($time * 1000);\n$intlcal->add(IntlCalendar::FIELD_DAY_OF_MONTH, 1);\n$intlcal->add(IntlCalendar::FIELD_HOUR, 5);\n$intlcal->add(IntlCalendar::FIELD_MINUTE, 6);\nintlcal_add($intlcal, IntlCalendar::FIELD_SECOND, 7);\nvar_dump(\n    (float)$time2*1000,\n    $intlcal->getTime());\n?>")).toMatchSnapshot();
  });
});
