// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/timezone_getDSTSavings_basic.phpt
  it("IntlTimeZone::getDSTSavings(): basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n$lsb = IntlTimeZone::createTimeZone('Europe/Lisbon');\nvar_dump($lsb->getDSTSavings());\nvar_dump(intltz_get_dst_savings($lsb));\n?>")).toMatchSnapshot();
  });
});
