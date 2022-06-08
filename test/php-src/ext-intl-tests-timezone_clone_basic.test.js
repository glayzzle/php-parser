// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/timezone_clone_basic.phpt
  it("IntlTimeZone clone handler: basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n$tz1 = IntlTimeZone::createTimeZone('Europe/Amsterdam');\nprint_r($tz1);\nprint_r(clone $tz1);\n//clone non-owned object\n$gmt = IntlTimeZone::getGMT();\nprint_r($gmt);\nprint_r(clone $gmt);\n?>")).toMatchSnapshot();
  });
});
