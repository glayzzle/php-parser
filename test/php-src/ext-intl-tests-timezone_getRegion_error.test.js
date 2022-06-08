// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/timezone_getRegion_error.phpt
  it("IntlTimeZone::getRegion(): errors", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nvar_dump(IntlTimeZone::getRegion(\"foo\\x81\"));\nvar_dump(IntlTimeZone::getRegion(\"foo\"));\n?>")).toMatchSnapshot();
  });
});
