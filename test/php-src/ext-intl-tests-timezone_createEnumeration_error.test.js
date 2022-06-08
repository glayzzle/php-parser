// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/timezone_createEnumeration_error.phpt
  it("IntlTimeZone::createEnumeration(): errors", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nvar_dump(IntlTimeZone::createEnumeration(array()));\n?>")).toMatchSnapshot();
  });
});
