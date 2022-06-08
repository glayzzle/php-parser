// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/timezone_useDaylightTime_error.phpt
  it("IntlTimeZone::useDaylightTime(): errors", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nintltz_use_daylight_time(null);\n?>")).toMatchSnapshot();
  });
});
