// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug73987_1.phpt
  it("Bug #73987 (Method compatibility check looks to original definition and not parent - return types interface)", function () {
    expect(parser.parseCode("<?php\ninterface I {\n  public function example();\n}\nclass A implements I {\n  public function example(): int { } // compatible with I::example\n}\nclass B extends A {\n  public function example(): string { } // compatible with I::example\n}\n?>")).toMatchSnapshot();
  });
});
