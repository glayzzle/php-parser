// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/calendar/tests/bug55797_1.phpt
  it("Bug #55797: Integer overflow in SdnToGregorian leads to segfault (in optimized builds)", function () {
    expect(parser.parseCode("<?php\n$x = 882858030;\nvar_dump(cal_from_jd($x, CAL_GREGORIAN));\n?>")).toMatchSnapshot();
  });
});
