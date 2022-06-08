// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug43332_1.phpt
  it("Bug #43332.1 (self and parent as type hint in namespace)", function () {
    expect(parser.parseCode("<?php\nnamespace foobar;\nclass foo {\n  public function bar(self $a) { }\n}\n$foo = new foo;\n$foo->bar($foo); // Ok!\n$foo->bar(new \\stdclass); // Error, ok!\n?>")).toMatchSnapshot();
  });
});
