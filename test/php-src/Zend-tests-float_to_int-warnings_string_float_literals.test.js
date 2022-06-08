// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/float_to_int/warnings_string_float_literals.phpt
  it("Implicit string float to int conversions should warn for literals", function () {
    expect(parser.parseCode("<?php\necho 'Bitwise ops:' . \\PHP_EOL;\n// 7 Warnings generated in total\n$var = '1.5'|3;\nvar_dump($var);\n$var = '1.5'&3;\nvar_dump($var);\n$var = '1.5'^3;\nvar_dump($var);\n$var = '1.5' << 3;\nvar_dump($var);\n$var = '1.5' >> 3;\nvar_dump($var);\n$var = 3 << '1.5';\nvar_dump($var);\n$var = 3 >> '1.5';\nvar_dump($var);\necho 'Modulo:' . \\PHP_EOL;\n// 2 warnings in total\n$var = '6.5' % 2;\nvar_dump($var);\n$var = 9 % '2.5';\nvar_dump($var);\necho 'Function calls:' . \\PHP_EOL;\nfunction foo(int $a) {\n    return $a;\n}\nvar_dump(foo('1.5'));\nvar_dump(chr('60.5'));\necho 'Function returns:' . \\PHP_EOL;\nfunction bar(): int {\n    return '3.5';\n}\nvar_dump(bar());\necho 'Typed property assignment:' . \\PHP_EOL;\nclass Test {\n    public int $a;\n}\n$instance = new Test();\n$instance->a = '1.5';\nvar_dump($instance->a);\n?>")).toMatchSnapshot();
  });
});
