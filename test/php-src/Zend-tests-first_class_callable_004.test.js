// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/first_class_callable_004.phpt
  it("First Class Callable from Private Scope", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    private function method() {\n        return __METHOD__;\n    }\n    public function bar()  {\n        return $this->method(...);\n    }\n}\n$foo = new Foo;\n$bar = $foo->bar(...);\necho ($bar())();\n?>")).toMatchSnapshot();
  });
});
