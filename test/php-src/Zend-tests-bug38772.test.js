// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug38772.phpt
  it("Bug #38772 (inconsistent overriding of methods in different visibility contexts)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public function __construct() {\n        $this -> foo();\n    }\n    private function foo() {\n        echo __METHOD__ . \"\\r\\n\";\n    }\n}\nclass B extends A {\n    public function foo() {\n        echo __METHOD__ . \"\\r\\n\";\n    }\n}\nclass C extends A {\n    protected function foo() {\n        echo __METHOD__ . \"\\r\\n\";\n    }\n}\nclass D extends A {\n        private function foo() {\n                echo __METHOD__ . \"\\r\\n\";\n        }\n}\n$a = new A();\n$b = new B();\n$c = new C();\n$d = new D();\n?>")).toMatchSnapshot();
  });
});
