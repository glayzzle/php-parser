// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug73987.phpt
  it("Bug #73987 (Method compatibility check looks to original definition and not parent - nullability interface)", function () {
    expect(parser.parseCode("<?php\ninterface I {\n  public function example($a, $b, $c);\n}\nclass A implements I {\n  public function example($a, $b = null, $c = null) { } // compatible with I::example\n}\nclass B extends A {\n  public function example($a, $b, $c = null) { } // compatible with I::example\n}\n?>")).toMatchSnapshot();
  });
});
