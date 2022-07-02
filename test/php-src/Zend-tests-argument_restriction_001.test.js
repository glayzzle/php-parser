// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/argument_restriction_001.phpt
  it("Bug #55719 (Argument restriction should come with a more specific error message)", function () {
    expect(parser.parseCode("<?php\nClass Base {\n    public function &test($foo, array $bar, $option = NULL, $extra = \"lllllllllllllllllllllllllllllllllllllllllllllllllll\") {\n    }\n}\nclass Sub extends Base {\n    public function &test() {\n    }\n}\n?>")).toMatchSnapshot();
  });
});
