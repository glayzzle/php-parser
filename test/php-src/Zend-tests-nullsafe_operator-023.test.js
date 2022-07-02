// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nullsafe_operator/023.phpt
  it("Foreach by reference on nullsafe", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public $bar;\n}\n$foo = new Foo();\nforeach ($foo?->bar as &$value) {\n    var_dump($value);\n}\n// Don't convert $foo->bar into a reference.\n$foo->bar = [42];\nforeach ($foo?->bar as &$value) {\n    var_dump($value);\n    $value++;\n}\nvar_dump($foo->bar);\n// But respect interior references.\n$ref =& $foo->bar[0];\nforeach ($foo?->bar as &$value) {\n    var_dump($value);\n    $value++;\n}\nvar_dump($foo->bar);\n?>")).toMatchSnapshot();
  });
});
