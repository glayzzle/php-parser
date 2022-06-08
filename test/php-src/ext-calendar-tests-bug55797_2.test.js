// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/calendar/tests/bug55797_2.phpt
  it("Bug #55797: Integer overflow in SdnToGregorian leads to segfault (in optimized builds)", function () {
    expect(parser.parseCode("<?php\n$x = 9223372036854743639;\nvar_dump(cal_from_jd($x, CAL_GREGORIAN));\n?>")).toMatchSnapshot();
  });
});
