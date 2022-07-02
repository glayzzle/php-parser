// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug68412.phpt
  it("Bug #68412 (Infinite recursion with __call can make the program crash/segfault)", function () {
    expect(parser.parseCode("<?php\nclass C {\n  public function __call($x, $y) {\n    global $z;\n    $z->bar();\n  }\n}\n$z = new C;\nfunction main() {\n  global $z;\n  $z->foo();\n}\nmain();\n?>")).toMatchSnapshot();
  });
});
