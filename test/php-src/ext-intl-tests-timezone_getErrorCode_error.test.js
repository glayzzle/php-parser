// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/timezone_getErrorCode_error.phpt
  it("IntlTimeZone::getErrorCode(): errors", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nvar_dump(intltz_get_error_code(null));\n?>")).toMatchSnapshot();
  });
});
