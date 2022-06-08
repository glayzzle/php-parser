// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/timezone_getEquivalentID_basic.phpt
  it("IntlTimeZone::getEquivalentID(): basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nprint_R(IntlTimeZone::getEquivalentID('Europe/Lisbon', \"1\"));\necho \"\\n\";\nprint_R(intltz_get_equivalent_id('Europe/Lisbon', 1));\necho \"\\n\";\n?>")).toMatchSnapshot();
  });
});
