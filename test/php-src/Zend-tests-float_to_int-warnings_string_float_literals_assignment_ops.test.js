// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/float_to_int/warnings_string_float_literals_assignment_ops.phpt
  it("Implicit float to int conversions should warn for literals in combined assingment operetor", function () {
    expect(parser.parseCode("<?php\necho 'Bitwise ops:' . \\PHP_EOL;\n$var = 3;\n$var |= '1.5';\nvar_dump($var);\n$var = 3;\n$var &= '1.5';\nvar_dump($var);\n$var = 3;\n$var ^= '1.5';\nvar_dump($var);\n$var = 3;\n$var <<= '1.5';\nvar_dump($var);\n$var = 3;\n$var >>= '1.5';\nvar_dump($var);\necho 'Modulo:' . \\PHP_EOL;\n$var = 9;\n$var %= '2.5';\nvar_dump($var);\n?>")).toMatchSnapshot();
  });
});
