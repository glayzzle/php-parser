// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/timezone_createDefault_basic.phpt
  it("IntlTimeZone::createDefault(): basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n$tz = IntlTimeZone::createDefault();\nprint_r($tz);\n$tz = intltz_create_default();\nprint_r($tz);\n?>")).toMatchSnapshot();
  });
});
