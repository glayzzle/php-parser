// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/substr_replace_array.phpt
  it("substr_replace() function - array", function () {
    expect(parser.parseCode("<?php\n$arr = array('abc' => 'llsskdkk','def' => 'llsskjkkdd', 4 => 'hello', 42 => 'world');\n$newarr = substr_replace($arr, 'zzz', 0, -2);\nprint_r($newarr);\n?>")).toMatchSnapshot();
  });
});
