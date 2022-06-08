// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/timezone_getRawOffset_basic.phpt
  it("IntlTimeZone::getRawOffset(): basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n$ams = IntlTimeZone::createTimeZone('Europe/Amsterdam');\nvar_dump($ams->getRawOffset());\n$lsb = IntlTimeZone::createTimeZone('Europe/Lisbon');\nvar_dump(intltz_get_raw_offset($lsb));\n?>")).toMatchSnapshot();
  });
});
