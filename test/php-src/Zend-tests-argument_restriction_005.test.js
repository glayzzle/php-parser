// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/argument_restriction_005.phpt
  it("Bug #55719 (Argument restriction should come with a more specific error message)", function () {
    expect(parser.parseCode("<?php\nclass Sub implements ArrayAccess {\n    public function offsetSet(): void {\n    }\n}\n?>")).toMatchSnapshot();
  });
});
