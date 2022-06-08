// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_isWeekend_basic.phpt
  it("IntlCalendar::isWeekend basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"nl\");\n$intlcal = IntlCalendar::createInstance('UTC');\nvar_dump($intlcal->isWeekend(strtotime('2012-02-29 12:00:00 +0000') * 1000));\nvar_dump(intlcal_is_weekend($intlcal, strtotime('2012-02-29 12:00:00 +0000') * 1000));\nvar_dump($intlcal->isWeekend(strtotime('2012-03-11 12:00:00 +0000') * 1000));\n?>")).toMatchSnapshot();
  });
});
