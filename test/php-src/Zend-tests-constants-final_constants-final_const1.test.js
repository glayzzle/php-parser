// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/constants/final_constants/final_const1.phpt
  it("Class constants support the final modifier", function () {
    expect(parser.parseCode("<?php\nclass Foo\n{\n    final const A = \"foo\";\n    final public const B = \"foo\";\n}\n?>")).toMatchSnapshot();
  });
});
