// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/timezone_getUnknown_basic.phpt
  it("IntlCalendar::getUnknown(): basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"nl\");\n$tz = IntlTimeZone::getUnknown();\nprint_r($tz);\n$tz = intltz_get_unknown();\nprint_r($tz);\n?>")).toMatchSnapshot();
  });
});
