// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/timezone_createTimeZone_error.phpt
  it("IntlTimeZone::createTimeZone(): errors", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nvar_dump(IntlTimeZone::createTimeZone(\"foo\\x80\"));\n?>")).toMatchSnapshot();
  });
});
