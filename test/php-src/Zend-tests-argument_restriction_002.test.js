// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/argument_restriction_002.phpt
  it("Bug #55719 (Argument restriction should come with a more specific error message)", function () {
    expect(parser.parseCode("<?php\nAbstract Class Base {\n    public function test($foo, array &$bar, $option = NULL, $extra = 3.141592653589793238462643383279502884197169399375105  ) {\n    }\n}\nclass Sub extends Base {\n    public function test($foo, array &$bar) {\n    }\n}\n?>")).toMatchSnapshot();
  });
});
