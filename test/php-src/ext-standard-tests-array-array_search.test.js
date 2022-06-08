// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_search.phpt
  it("Test array_search()/in_array()", function () {
    expect(parser.parseCode("<?php\n$arr1 = array('a','b','c');\n$arr2 = array();\n$arr3 = array('c','key'=>'d');\n$arr4 = array(\"a\\0b\"=>'e','key'=>'d', 'f');\nvar_dump(in_array(123, $arr2));\nvar_dump(in_array(123, $arr1));\nvar_dump(array_search(123, $arr1));\nvar_dump(in_array('a', $arr1));\nvar_dump(array_search('a', $arr1));\nvar_dump(array_search('e', $arr4));\nvar_dump(array_search('d', $arr4));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
