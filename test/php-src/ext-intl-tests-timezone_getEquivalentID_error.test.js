// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/timezone_getEquivalentID_error.phpt
  it("IntlTimeZone::getEquivalentID(): errors", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nvar_dump(IntlTimeZone::getEquivalentID(\"foo\\x80\", 0));\n?>")).toMatchSnapshot();
  });
});
