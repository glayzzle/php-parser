// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/timezone_getTZData_basic.phpt
  it("IntlTimeZone::getTZDataVersion: basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nprint_R(IntlTimeZone::getTZDataVersion());\necho \"\\n\";\nprint_R(intltz_get_tz_data_version());\necho \"\\n\";\n?>")).toMatchSnapshot();
  });
});
