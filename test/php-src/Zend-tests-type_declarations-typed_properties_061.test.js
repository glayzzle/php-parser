// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_061.phpt
  it("Typed property on overloaded by-ref property", function () {
    expect(parser.parseCode("<?php\n$a = new class {\n    public int $foo = 1;\n    function &__get($x) {\n        return $this->foo;\n    }\n    function __set($x, $y) {\n        echo \"set($y)\\n\";\n    }\n};\n$a->_ += 1;\nvar_dump($a->foo);\n$a->_ .= \"1\";\nvar_dump($a->foo);\n$a->_ .= \"e50\";\nvar_dump($a->foo);\n$a->_--;\nvar_dump($a->foo);\n--$a->_;\nvar_dump($a->foo);\n$a->foo = PHP_INT_MAX;\n$a->_++;\nvar_dump($a->foo);\n++$a->_;\nvar_dump($a->foo);\n?>")).toMatchSnapshot();
  });
});
