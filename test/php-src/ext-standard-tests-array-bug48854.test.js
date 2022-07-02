// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug48854.phpt
  it("Bug #48854 (array_merge_recursive modifies arrays after first one)", function () {
    expect(parser.parseCode("<?php\n$array1 = array(\n       'friends' => 5,\n       'children' => array(\n               'dogs' => 0,\n       ),\n);\n$array2 = array(\n       'friends' => 10,\n       'children' => array(\n               'cats' => 5,\n       ),\n);\n$merged = array_merge_recursive($array1, $array2);\nvar_dump($array1, $array2);\n?>")).toMatchSnapshot();
  });
});
