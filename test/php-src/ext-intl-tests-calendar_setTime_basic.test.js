// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_setTime_basic.phpt
  it("IntlCalendar::setTime() basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"nl\");\n$time = strtotime('2012-02-29 00:00:00 +0000');\n$intlcal = IntlCalendar::createInstance('UTC');\n$intlcal->setTime($time * 1000);\nvar_dump(\n    (float)$time*1000,\n    $intlcal->getTime());\n$intlcal = IntlCalendar::createInstance('UTC');\nintlcal_set_time($intlcal,$time * 1000);\nvar_dump(intlcal_get_time($intlcal));\n?>")).toMatchSnapshot();
  });
});
