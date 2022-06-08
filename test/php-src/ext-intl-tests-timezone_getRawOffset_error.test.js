// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/timezone_getRawOffset_error.phpt
  it("IntlTimeZone::getRawOffset(): errors", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nintltz_get_raw_offset(null);\n?>")).toMatchSnapshot();
  });
});
