// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/timezone_useDaylightTime_basic.phpt
  it("IntlTimeZone::useDaylightTime: basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n$lsb = IntlTimeZone::createTimeZone('Europe/Lisbon');\n$gmt = IntlTimeZone::getGMT();\nvar_dump($lsb->useDaylightTime());\nvar_dump($gmt->useDaylightTime());\nvar_dump(intltz_use_daylight_time($lsb));\nvar_dump(intltz_use_daylight_time($gmt));\n?>")).toMatchSnapshot();
  });
});
