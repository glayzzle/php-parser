// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/timezone_fromDateTimeZone_error.phpt
  it("IntlTimeZone::fromDateTimeZone(): argument errors", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n$dt = new DateTime('2012-08-01 00:00:00 WEST');\nvar_dump(IntlTimeZone::fromDateTimeZone($dt->getTimeZone()));\n?>")).toMatchSnapshot();
  });
});
