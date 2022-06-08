// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/pow_ref.phpt
  it("Use power operator on reference", function () {
    expect(parser.parseCode("<?php\n$a = 2;\n$b = 3;\n$ref =& $b;\n$a **= $b;\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
