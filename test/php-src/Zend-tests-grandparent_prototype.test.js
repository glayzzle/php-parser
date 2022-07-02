// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/grandparent_prototype.phpt
  it("Protected visibility test case with a grandparent prototype", function () {
    expect(parser.parseCode("<?php\nclass A {\n    protected function test() {}\n}\nclass B extends A {\n    public function test2($x) {\n        $x->test(); // Uncaught Error: Call to protected method D::test() from scope B\n    }\n}\nclass C extends A {\n    protected function test() {}\n}\nclass D extends C {\n    protected function test() {\n        echo \"Hello World!\\n\";\n    }\n}\n(new B)->test2(new D);\n?>")).toMatchSnapshot();
  });
});
