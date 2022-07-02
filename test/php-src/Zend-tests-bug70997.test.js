// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70997.phpt
  it("Bug #70997 (When using parentClass:: instead of parent::, static context changed)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    const TEST = false;\n    public function test()\n    {\n        var_dump(static::TEST);\n    }\n}\nclass B extends A {\n    const TEST = true;\n    public function test()\n    {\n        A::test();\n    }\n}\n$b = new B;\n$b->test();\n?>")).toMatchSnapshot();
  });
});
