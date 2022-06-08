// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug48215.phpt
  it("Bug #48215 - parent::method() calls __construct", function () {
    expect(parser.parseCode("<?php\nclass A\n{\n    public function __construct() {\n        echo __METHOD__ . \"\\n\";\n    }\n    protected function A()\n    {\n        echo __METHOD__ . \"\\n\";\n    }\n}\nclass B extends A\n{\n    public function __construct() {\n        echo __METHOD__ . \"\\n\";\n        parent::__construct();\n    }\n    public function A()\n    {\n        echo __METHOD__ . \"\\n\";\n        parent::A();\n    }\n}\n$b = new B();\n$b->A();\n?>")).toMatchSnapshot();
  });
});
