// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/timezone_getGMT_basic.phpt
  it("IntlTimeZone::getGMT(): basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n$tz = IntlTimeZone::getGMT();\nprint_r($tz);\n$tz = intltz_get_gmt();\nprint_r($tz);\n?>")).toMatchSnapshot();
  });
});
