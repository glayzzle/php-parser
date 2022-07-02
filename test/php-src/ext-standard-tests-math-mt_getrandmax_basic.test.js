// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/mt_getrandmax_basic.phpt
  it("Test mt_getrandmax() - basic function test mt_getrandmax()", function () {
    expect(parser.parseCode("<?php\nvar_dump(mt_getrandmax());\n?>")).toMatchSnapshot();
  });
});
