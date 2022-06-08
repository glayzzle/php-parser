// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69420.phpt
  it("Bug #69420 (Invalid read in zend_std_get_method)", function () {
    expect(parser.parseCode("<?php\ntrait T {\n    protected function test() {\n        echo \"okey\";\n    }\n}\nclass A {\n    protected function test() {\n    }\n}\nclass B extends A {\n    use T;\n    public function foo() {\n        $this->test();\n    }\n}\n$b = new B();\n$b->foo();\n?>")).toMatchSnapshot();
  });
});
