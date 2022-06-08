// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_092.phpt
  it("Refs on ASSIGN_OBJ fast-path", function () {
    expect(parser.parseCode("<?php\nfunction &ref(&$foo) {\n    return $foo;\n}\nclass Test {\n    public array $prop;\n    public int $prop2;\n    public function foo() {\n        $array = [];\n        $ref =& $array;\n        $this->prop = $array;\n    }\n    public function bar() {\n        $str = \"123\";\n        $this->prop2 = ref($str);\n    }\n}\n$test = new Test;\n$test->foo();\n$test->foo();\n$test->bar();\n$test->bar();\nvar_dump($test);\n?>")).toMatchSnapshot();
  });
});
