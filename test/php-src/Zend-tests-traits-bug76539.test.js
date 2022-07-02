// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/bug76539.phpt
  it("Bug #76539 (Trait attribute is set incorrectly when using self::class with another string)", function () {
    expect(parser.parseCode("<?php\ntrait MyTrait {\n    protected $attr = self::class . 'Test';\n    public function test() {\n        echo $this->attr, PHP_EOL;\n    }\n}\nclass A {\n    use MyTrait;\n}\nclass B {\n    use MyTrait;\n}\n(new A())->test();\n(new B())->test();\n?>")).toMatchSnapshot();
  });
});
