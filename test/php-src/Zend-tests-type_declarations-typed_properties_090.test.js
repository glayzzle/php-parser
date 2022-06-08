// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_090.phpt
  it("Unsetting typed properties containing a reference must respect shadowing", function () {
    expect(parser.parseCode("<?php\nclass A {\n    private int $prop = 42;\n    public function test() {\n        $x =& $this->prop;\n        unset($this->prop);\n        $x = \"foo\";\n        var_dump($x);\n    }\n}\nclass B extends A {\n    private $prop;\n}\n$b = new B;\n$b->test();\n?>")).toMatchSnapshot();
  });
});
