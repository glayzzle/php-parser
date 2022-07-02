// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug67938.phpt
  it("Bug #67938: Segfault when extending interface method with variadic", function () {
    expect(parser.parseCode("<?php\ninterface TestInterface {\n    public function foo();\n    public function bar(array $bar);\n}\nclass Test implements TestInterface {\n    public function foo(...$args) {\n        echo __METHOD__, \"\\n\";\n    }\n    public function bar(array $bar, ...$args) {\n        echo __METHOD__, \"\\n\";\n    }\n}\n$obj = new Test;\n$obj->foo();\n$obj->bar([]);\n$obj->bar([], 1);\n?>")).toMatchSnapshot();
  });
});
