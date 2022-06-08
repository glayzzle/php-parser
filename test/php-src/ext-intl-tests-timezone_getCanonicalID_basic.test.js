// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/timezone_getCanonicalID_basic.phpt
  it("IntlTimeZone::getCanonicalID: basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nprint_R(IntlTimeZone::getCanonicalID('Portugal'));\necho \"\\n\";\nprint_R(intltz_get_canonical_id('Portugal'));\necho \"\\n\";\n?>")).toMatchSnapshot();
  });
});
