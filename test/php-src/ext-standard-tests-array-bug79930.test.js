// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug79930.phpt
  it("Bug #79930: array_merge_recursive() crashes when called with array with single reference", function () {
    expect(parser.parseCode("<?php\n$a = 'a';\n$array = [\n    'value' => $a . 'b',\n];\n// Create rc=1 reference.\narray_walk($array, function () {});\n$m = array_merge_recursive(['value' => 'a'], $array);\nvar_dump($a, $array, $m);\n?>")).toMatchSnapshot();
  });
});
