// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/timezone_getID_error.phpt
  it("IntlTimeZone::getID(): errors", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nintltz_get_id(null);\n?>")).toMatchSnapshot();
  });
});
