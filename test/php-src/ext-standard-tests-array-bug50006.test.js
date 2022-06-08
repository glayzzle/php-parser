// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug50006.phpt
  it("Bug #50006 (Segfault caused by uksort())", function () {
    expect(parser.parseCode("<?php\n$data = array(\n    'bar-bazbazbaz.' => 0,\n    'bar-bazbazbaz-' => 0,\n    'foo' => 0,\n);\nuksort($data, 'magic_sort_cmp');\nprint_r($data);\nfunction magic_sort_cmp($a, $b) {\n  $a = substr($a, 1);\n  $b = substr($b, 1);\n  if (!$a) return $b ? -1 : 0;\n  if (!$b) return 1;\n  return magic_sort_cmp($a, $b);\n}\n?>")).toMatchSnapshot();
  });
});
