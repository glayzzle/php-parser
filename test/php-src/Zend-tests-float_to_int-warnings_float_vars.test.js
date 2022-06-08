// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/float_to_int/warnings_float_vars.phpt
  it("Implicit float to int conversions should warn for variables", function () {
    expect(parser.parseCode("<?php\necho 'Bitwise ops:' . \\PHP_EOL;\n$float = 1.5;\n$var = ~$float;\nvar_dump($var);\n$var = $float|3;\nvar_dump($var);\n$var = $float&3;\nvar_dump($var);\n$var = $float^3;\nvar_dump($var);\n$var = $float << 3;\nvar_dump($var);\n$var = $float >> 3;\nvar_dump($var);\n$var = $float;\n$var <<= 3;\nvar_dump($var);\n$var = $float;\n$var >>= 3;\nvar_dump($var);\n$var = 3 << $float;\nvar_dump($var);\n$var = 3 >> $float;\nvar_dump($var);\necho 'Modulo:' . \\PHP_EOL;\n$modFloat = 6.5;\n$var = $modFloat % 2;\nvar_dump($var);\n$modFloat = 2.5;\n$var = 9 % $modFloat;\nvar_dump($var);\necho 'Offset access:' . \\PHP_EOL;\n$offsetAccess = 2.5;\necho 'Arrays:' . \\PHP_EOL;\n// 2 warnings in total\n$array = ['a', 'b', 'c'];\nvar_dump($array[$float]);\n$array[$offsetAccess] = 'z';\nvar_dump($array);\necho 'Strings:' . \\PHP_EOL;\n// 2 warnings in total\n$string = 'php';\nvar_dump($string[$float]);\n$string[$offsetAccess] = 'z';\nvar_dump($string);\necho 'Function calls:' . \\PHP_EOL;\nfunction foo(int $a) {\n    return $a;\n}\nvar_dump(foo($float));\n$cp = 60.5;\nvar_dump(chr($cp));\necho 'Function returns:' . \\PHP_EOL;\nfunction bar(): int {\n    $var = 3.5;\n    return $var;\n}\nvar_dump(bar());\necho 'Typed property assignment:' . \\PHP_EOL;\nclass Test {\n    public int $a;\n}\n$instance = new Test();\n$instance->a = $float;\nvar_dump($instance->a);\n?>")).toMatchSnapshot();
  });
});
