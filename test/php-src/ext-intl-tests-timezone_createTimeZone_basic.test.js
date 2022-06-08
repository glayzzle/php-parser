// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/timezone_createTimeZone_basic.phpt
  it("IntlTimeZone::createTimeZone(): basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n$tz = IntlTimeZone::createTimeZone('GMT+01:00');\nprint_r($tz);\n$tz = intltz_create_time_zone('GMT+01:00');\nprint_r($tz);\n?>")).toMatchSnapshot();
  });
});
