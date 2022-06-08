// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/array_add_indirect.phpt
  it("Array addition should not add INDIRECT elements", function () {
    expect(parser.parseCode("<?php\n$x = 1;\n$ary = ['y' => 1];\n$ary += $GLOBALS;\nvar_dump($ary['x']);\n$x = 2;\nvar_dump($ary['x']);\n?>")).toMatchSnapshot();
  });
});
