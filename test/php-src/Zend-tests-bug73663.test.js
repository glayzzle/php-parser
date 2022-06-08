// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug73663.phpt
  it("Bug #73663 (\"Invalid opcode 65/16/8\" occurs with a variable created with list())", function () {
    expect(parser.parseCode("<?php\nfunction change(&$ref) {\n    $ref = range(1, 10);\n    return;\n}\n$func = function (&$ref) {\n    return change($ref);\n};\n$array = [1];\nvar_dump(list($val) = $array); // NG: Invalid opcode\nchange(list(&$val) = $array);\nvar_dump($array);\n$array = [1];\n$func(list(&$val) = $array);\nvar_dump($array);\n?>")).toMatchSnapshot();
  });
});
