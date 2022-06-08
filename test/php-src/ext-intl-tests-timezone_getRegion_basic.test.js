// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/timezone_getRegion_basic.phpt
  it("IntlTimeZone::getRegion(): basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nprint_R(IntlTimeZone::getRegion('Europe/Amsterdam'));\necho \"\\n\";\nprint_R(intltz_get_region('Europe/Amsterdam'));\necho \"\\n\";\n?>")).toMatchSnapshot();
  });
});
