// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug70808.phpt
  it("Bug #70808 (array_merge_recursive corrupts memory of unset items)", function () {
    expect(parser.parseCode("<?php\n$arr1 = array(\"key\" => array(0, 1));\n$arr2 = array(\"key\" => array(2));\nunset($arr1[\"key\"][1]);\n$result = array_merge_recursive($arr1, $arr2);\nprint_r($result);\n?>")).toMatchSnapshot();
  });
});
