// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/array_addition_not_commutative.phpt
  it("Array addition is not commutative -- do not swap operands", function () {
    expect(parser.parseCode("<?php\n$array = [1, 2, 3];\n$array = [4, 5, 6] + $array;\nvar_dump($array);\n?>")).toMatchSnapshot();
  });
});
