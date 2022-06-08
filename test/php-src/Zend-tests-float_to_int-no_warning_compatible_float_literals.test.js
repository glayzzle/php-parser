// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/float_to_int/no_warning_compatible_float_literals.phpt
  it("Implicit float to int conversions should not warn for literals if float has a fractional part equal to 0", function () {
    expect(parser.parseCode("<?php\necho 'Bitwise ops:' . \\PHP_EOL;\n$var = ~1.0;\nvar_dump($var);\n$var = 1.0|3;\nvar_dump($var);\n$var = 1.0&3;\nvar_dump($var);\n$var = 1.0^3;\nvar_dump($var);\n$var = 1.0 << 3;\nvar_dump($var);\n$var = 1.0 >> 3;\nvar_dump($var);\n$var = 3 << 1.0;\nvar_dump($var);\n$var = 3 >> 1.0;\nvar_dump($var);\necho 'Modulo:' . \\PHP_EOL;\n$var = 6.0 % 2;\nvar_dump($var);\n$var = 9 % 2.0;\nvar_dump($var);\necho 'Offset access:' . \\PHP_EOL;\necho 'Arrays:' . \\PHP_EOL;\n$array = ['a', 'b', 'c'];\nvar_dump($array[1.0]);\n$array[2.0] = 'z';\nvar_dump($array);\n/* Strings are handled differently and always warn on non integer keys */\necho 'Function calls:' . \\PHP_EOL;\nfunction foo(int $a) {\n    return $a;\n}\nvar_dump(foo(1.0));\nvar_dump(chr(60.0));\necho 'Function returns:' . \\PHP_EOL;\nfunction bar(): int {\n    return 3.0;\n}\nvar_dump(bar());\necho 'Typed property assignment:' . \\PHP_EOL;\nclass Test {\n    public int $a;\n}\n$instance = new Test();\n$instance->a = 1.0;\nvar_dump($instance->a);\n?>")).toMatchSnapshot();
  });
});
