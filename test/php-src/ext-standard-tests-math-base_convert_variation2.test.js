// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/base_convert_variation2.phpt
  it("Test base_convert() function : strange literals", function () {
    expect(parser.parseCode("<?php\necho 'Binary to decimal:', \\PHP_EOL;\nvar_dump(base_convert('0b', 2, 10));\nvar_dump(base_convert('0B', 2, 10));\nvar_dump(base_convert('', 2, 10));\necho 'Octal to decimal:', \\PHP_EOL;\nvar_dump(base_convert('0o', 8, 10));\nvar_dump(base_convert('0O', 8, 10));\nvar_dump(base_convert('0', 8, 10));\nvar_dump(base_convert('', 8, 10));\necho 'Hexadecimal to decimal:', \\PHP_EOL;\nvar_dump(base_convert('0x', 16, 10));\nvar_dump(base_convert('0X', 16, 10));\nvar_dump(base_convert('', 16, 10));\n?>")).toMatchSnapshot();
  });
});
