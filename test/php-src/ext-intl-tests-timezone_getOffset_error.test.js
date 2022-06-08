// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/timezone_getOffset_error.phpt
  it("IntlTimeZone::getOffset(): errors", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n$tz = IntlTimeZone::createTimeZone('Europe/Lisbon');\nvar_dump($tz->getOffset(INF, true, $a, $a));\nintltz_get_offset(null, time()*1000, false, $a, $a);\n?>")).toMatchSnapshot();
  });
});
