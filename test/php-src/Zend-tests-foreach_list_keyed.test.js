// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/foreach_list_keyed.phpt
  it("foreach with list syntax, keyed", function () {
    expect(parser.parseCode("<?php\n$points = [\n    [\"x\" => 1, \"y\" => 2],\n    [\"x\" => 2, \"y\" => 1]\n];\nforeach ($points as list(\"x\" => $x, \"y\" => $y)) {\n    var_dump($x, $y);\n}\necho PHP_EOL;\n$invertedPoints = [\n    \"x\" => [1, 2],\n    \"y\" => [2, 1]\n];\nforeach ($invertedPoints as list(0 => $row1, 1 => $row2)) {\n    var_dump($row1, $row2);\n}\n?>")).toMatchSnapshot();
  });
});
