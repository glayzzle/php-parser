// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/list_mixed_nested_keyed_unkeyed.phpt
  it("list() with nested unkeyed and keyed list()", function () {
    expect(parser.parseCode("<?php\n$points = [\n    [\"x\" => 1, \"y\" => 2],\n    [\"x\" => 2, \"y\" => 1]\n];\nlist(list(\"x\" => $x1, \"y\" => $y1), list(\"x\" => $x2, \"y\" => $y2)) = $points;\nvar_dump($x1, $y1, $x2, $y2);\necho PHP_EOL;\n$invertedPoints = [\n    \"x\" => [1, 2],\n    \"y\" => [2, 1]\n];\nlist(\"x\" => list($x1, $x2), \"y\" => list($y1, $y2)) = $invertedPoints;\nvar_dump($x1, $y1, $x2, $y2);\n?>")).toMatchSnapshot();
  });
});
