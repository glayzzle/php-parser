// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_inDaylightTime_basic.phpt
  it("IntlCalendar::inDaylightTime() basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"nl\");\n$intlcal = IntlCalendar::createInstance('Europe/Amsterdam');\n$intlcal->setTime(strtotime('2012-01-01') * 1000);\nvar_dump($intlcal->inDaylightTime());\n$intlcal->setTime(strtotime('2012-04-01') * 1000);\nvar_dump(intlcal_in_daylight_time($intlcal));\n?>")).toMatchSnapshot();
  });
});
