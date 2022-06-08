// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/argument_restriction_006.phpt
  it("Bug #60174 (Notice when array in method prototype error)", function () {
    expect(parser.parseCode("<?php\nAbstract Class Base {\n    public function test($foo, $extra = array(\"test\")) {\n    }\n}\nclass Sub extends Base {\n    public function test($foo, $extra) {\n    }\n}\n?>")).toMatchSnapshot();
  });
});
