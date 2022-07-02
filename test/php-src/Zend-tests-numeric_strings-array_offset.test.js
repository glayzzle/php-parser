// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/numeric_strings/array_offset.phpt
  it("Using different sorts of numerical strings as an array offset", function () {
    expect(parser.parseCode("<?php\n$arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];\nvar_dump($arr[\"7\"]);\nvar_dump($arr[\"7.5\"]);\nvar_dump($arr[\"  7\"]);\nvar_dump($arr[\"  7.5\"]);\nvar_dump($arr[\"  7  \"]);\nvar_dump($arr[\"  7.5  \"]);\nvar_dump($arr[\"7  \"]);\nvar_dump($arr[\"7.5  \"]);\nvar_dump($arr[\"7str\"]);\nvar_dump($arr[\"7.5str\"]);\nvar_dump($arr[\"  7str\"]);\nvar_dump($arr[\"  7.5str\"]);\nvar_dump($arr[\"  7  str\"]);\nvar_dump($arr[\"  7.5  str\"]);\nvar_dump($arr[\"7  str\"]);\nvar_dump($arr[\"7.5  str\"]);\nvar_dump($arr[\"0xA\"]);\nvar_dump($arr[\"0b10\"]);\nvar_dump($arr[\"07\"]);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
