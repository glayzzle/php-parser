// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/timezone_getCanonicalID_error.phpt
  it("IntlTimeZone::getCanonicalID(): errors", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nvar_dump(IntlTimeZone::getCanonicalID(\"foo\\x81\"));\n?>")).toMatchSnapshot();
  });
});
