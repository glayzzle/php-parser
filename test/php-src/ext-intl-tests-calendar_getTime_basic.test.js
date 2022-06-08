// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_getTime_basic.phpt
  it("IntlCalendar::getTime() basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"nl\");\n$intlcal = IntlCalendar::createInstance('UTC');\n$intlcal->clear();\n$intlcal->set(IntlCalendar::FIELD_YEAR, 2012);\n$intlcal->set(IntlCalendar::FIELD_MONTH, 1 /* Feb */);\n$intlcal->set(IntlCalendar::FIELD_DAY_OF_MONTH, 29);\n$time = strtotime('2012-02-29 00:00:00 +0000');\nvar_dump((float)$time*1000, $intlcal->getTime());\n?>")).toMatchSnapshot();
  });
});
