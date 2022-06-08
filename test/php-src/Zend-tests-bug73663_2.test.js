// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug73663_2.phpt
  it("Bug #73663.2 (\"Invalid opcode 65/16/8\" occurs with a variable created with list())", function () {
    expect(parser.parseCode("<?php\nfunction change(&$ref) {\n    $ref = range(1, 10);\n    return;\n}\n$array = [1];\nchange(list($val) = $array);\nvar_dump($array);\n?>")).toMatchSnapshot();
  });
});
