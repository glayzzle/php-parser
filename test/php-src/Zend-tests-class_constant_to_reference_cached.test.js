// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/class_constant_to_reference_cached.phpt
  it("Conversion of a class constant to a reference after it has been cached", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    const TEST = 'TEST';\n    private $prop;\n    public function readConst() {\n        $this->prop = self::TEST;\n    }\n}\nfunction doTest() {\n    $obj = new Test;\n    $obj->readConst();\n    unset($obj);\n    var_dump(Test::TEST);\n}\ndoTest();\neval('class Test2 extends Test {}');\ndoTest();\n?>")).toMatchSnapshot();
  });
});
