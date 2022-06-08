// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/getrandmax_basic.phpt
  it("Test getrandmax() - basic function test getrandmax()", function () {
    expect(parser.parseCode("<?php\n$biggest_int = getrandmax();\nvar_dump($biggest_int);\n?>")).toMatchSnapshot();
  });
});
