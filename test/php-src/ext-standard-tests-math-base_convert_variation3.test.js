// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/base_convert_variation3.phpt
  it("Test base_convert() function: converting '0'", function () {
    expect(parser.parseCode("<?php\necho 'Binary to decimal:', \\PHP_EOL;\nvar_dump(base_convert('0', 2, 10));\necho 'Octal to decimal:', \\PHP_EOL;\nvar_dump(base_convert('0', 8, 10));\necho 'Hexadecimal to decimal:', \\PHP_EOL;\nvar_dump(base_convert('0', 16, 10));\n?>")).toMatchSnapshot();
  });
});
