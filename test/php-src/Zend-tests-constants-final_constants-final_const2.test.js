// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/constants/final_constants/final_const2.phpt
  it("Final class constants cannot be overridden", function () {
    expect(parser.parseCode("<?php\nclass Foo\n{\n    final const A = \"foo\";\n}\nclass Bar extends Foo\n{\n    const A = \"bar\";\n}\n?>")).toMatchSnapshot();
  });
});
