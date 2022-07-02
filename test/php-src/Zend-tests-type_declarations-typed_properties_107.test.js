// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_107.phpt
  it("Assigning stringable object to static string property", function () {
    expect(parser.parseCode("<?php\nclass Test1 {\n    public static $ref;\n}\nclass Test2 {\n    public string $str = \"str\";\n}\nclass Test3 {\n    public function __toString() {\n        $x = \"foo\";\n        return $x . \"bar\";\n    }\n}\n$test2 = new Test2;\nTest1::$ref =& $test2->str;\nTest1::$ref = new Test3;\nvar_dump(Test1::$ref);\n?>")).toMatchSnapshot();
  });
});
