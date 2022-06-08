// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nullsafe_operator/032.phpt
  it("Nullsafe operator on $this", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public $foo = 42;\n    public function method() {\n        var_dump($this?->foo);\n        var_dump($this?->bar());\n    }\n    public function bar() {\n        return 24;\n    }\n}\n$test = new Test;\n$test->method();\n?>")).toMatchSnapshot();
  });
});
