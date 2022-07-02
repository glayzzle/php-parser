// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_094.phpt
  it("Edge cases relating to reference source tracking", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public int $prop = 42;\n}\nclass B extends A {\n}\n$b = new B;\n$r =& $b->prop;\nunset($b);\n$r = \"foo\"; // ok\nclass A2 {\n    private int $prop = 42;\n    public function &getRef() {\n        return $this->prop;\n    }\n}\nclass B2 extends A2 {\n    public $prop;\n}\n$b2 = new B2;\n$r2 =& $b2->getRef();\nunset($b2);\n$r2 = \"foo\"; // ok\n?>\n===DONE===")).toMatchSnapshot();
  });
});
