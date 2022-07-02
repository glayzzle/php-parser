// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/float_to_int/no_warnings_compatible_float_vars.phpt
  it("Implicit float to int conversions should not warn for variables if float has a fractional part equal to 0", function () {
    expect(parser.parseCode("<?php\necho 'Bitwise ops:' . \\PHP_EOL;\n$float = 1.0;\n$var = ~$float;\nvar_dump($var);\n$var = $float|3;\nvar_dump($var);\n$var = $float&3;\nvar_dump($var);\n$var = $float^3;\nvar_dump($var);\n$var = $float << 3;\nvar_dump($var);\n$var = $float >> 3;\nvar_dump($var);\n$var = $float;\n$var <<= 3;\nvar_dump($var);\n$var = $float;\n$var >>= 3;\nvar_dump($var);\n$var = 3 << $float;\nvar_dump($var);\n$var = 3 >> $float;\nvar_dump($var);\necho 'Modulo:' . \\PHP_EOL;\n$modFloat = 6.0;\n$var = $modFloat % 2;\nvar_dump($var);\n$modFloat = 2.0;\n$var = 9 % $modFloat;\nvar_dump($var);\necho 'Offset access:' . \\PHP_EOL;\n$offsetAccess = 2.0;\necho 'Arrays:' . \\PHP_EOL;\n$array = ['a', 'b', 'c'];\nvar_dump($array[$float]);\n$array[$offsetAccess] = 'z';\nvar_dump($array);\necho 'Function calls:' . \\PHP_EOL;\nfunction foo(int $a) {\n    return $a;\n}\nvar_dump(foo($float));\n$cp = 60.0;\nvar_dump(chr($cp));\necho 'Function returns:' . \\PHP_EOL;\nfunction bar(): int {\n    $var = 3.0;\n    return $var;\n}\nvar_dump(bar());\necho 'Typed property assignment:' . \\PHP_EOL;\nclass Test {\n    public int $a;\n}\n$instance = new Test();\n$instance->a = $float;\nvar_dump($instance->a);\n?>")).toMatchSnapshot();
  });
});
