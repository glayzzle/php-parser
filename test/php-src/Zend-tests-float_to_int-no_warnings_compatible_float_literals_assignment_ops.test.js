// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/float_to_int/no_warnings_compatible_float_literals_assignment_ops.phpt
  it("Implicit float to int conversions should not warn for literals in combined assingment operetor if float has a fractional part equal to 0", function () {
    expect(parser.parseCode("<?php\necho 'Bitwise ops:' . \\PHP_EOL;\n$var = 3;\n$var |= 1.0;\nvar_dump($var);\n$var = 3;\n$var &= 1.0;\nvar_dump($var);\n$var = 3;\n$var ^= 1.0;\nvar_dump($var);\n$var = 3;\n$var <<= 1.0;\nvar_dump($var);\n$var = 3;\n$var >>= 1.0;\nvar_dump($var);\necho 'Modulo:' . \\PHP_EOL;\n$var = 9;\n$var %= 2.0;\nvar_dump($var);\n?>")).toMatchSnapshot();
  });
});
