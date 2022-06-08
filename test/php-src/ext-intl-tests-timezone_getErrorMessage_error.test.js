// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/timezone_getErrorMessage_error.phpt
  it("IntlTimeZone::getErrorMessage(): errors", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nvar_dump(intltz_get_error_message(null));\n?>")).toMatchSnapshot();
  });
});
