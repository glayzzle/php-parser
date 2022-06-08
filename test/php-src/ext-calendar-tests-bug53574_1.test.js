// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/calendar/tests/bug53574_1.phpt
  it("Bug #53574 (Integer overflow in SdnToJulian; leads to segfault)", function () {
    expect(parser.parseCode("<?php\n$x = 882858043;\nvar_dump(cal_from_jd($x, CAL_JULIAN));\n?>")).toMatchSnapshot();
  });
});
