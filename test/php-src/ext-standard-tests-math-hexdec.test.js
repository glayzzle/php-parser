// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/hexdec.phpt
  it("overflow check for _php_math_basetozval", function () {
    expect(parser.parseCode("<?php\nvar_dump(hexdec(\"012345\"));\nvar_dump(hexdec(\"12345\"));\nvar_dump(hexdec(\"q12345\"));\nvar_dump(hexdec(\"12345+?!\"));\nvar_dump(hexdec(\"12345q\"));\nvar_dump((float)hexdec(\"1234500001\"));\nvar_dump((float)hexdec(\"17fffffff\"));\n?>")).toMatchSnapshot();
  });
});
