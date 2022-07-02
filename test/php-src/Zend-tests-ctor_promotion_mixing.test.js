// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ctor_promotion_mixing.phpt
  it("Constructor promotiong mixed with other properties, parameters and code", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public string $prop2;\n    public function __construct(public string $prop1 = \"\", $param2 = \"\") {\n        $this->prop2 = $prop1 . $param2;\n    }\n}\nvar_dump(new Test(\"Foo\", \"Bar\"));\necho \"\\n\";\necho new ReflectionClass(Test::class), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
