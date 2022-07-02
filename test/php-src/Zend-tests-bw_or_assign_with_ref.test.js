// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bw_or_assign_with_ref.phpt
  it("Bitwise or assign with referenced value", function () {
    expect(parser.parseCode("<?php\n$num1 = 1;\n$num2 = '2';\n$ref =& $num2;\n$num1 |= $num2;\nvar_dump($num1);\n?>")).toMatchSnapshot();
  });
});
