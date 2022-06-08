// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/constants/final_constants/final_const3.phpt
  it("Private class constants cannot be final", function () {
    expect(parser.parseCode("<?php\nclass Foo\n{\n    private final const A = \"foo\";\n}\n?>")).toMatchSnapshot();
  });
});
