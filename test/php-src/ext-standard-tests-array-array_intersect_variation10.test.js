// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_intersect_variation10.phpt
  it("Test array_intersect() function : usage variations - binary safe checking", function () {
    expect(parser.parseCode("<?php\n/*\n* Testing the behavior of array_intersect() by passing array with\n* binary values for $arr1 and $arr2 argument.\n*/\necho \"*** Testing array_intersect() : binary safe checking ***\\n\";\n// array with binary values\n$arr_binary = array(b\"hello\", b\"world\");\n// simple array\n$arr_normal = array(\"hello\", \"world\");\n// array with binary value for $arr1 argument\nvar_dump( array_intersect($arr_binary, $arr_normal) );\n// array with binary value for $arr2 argument\nvar_dump( array_intersect($arr_normal, $arr_binary) );\n// array with binary value for both $arr1 and $arr2 argument\nvar_dump( array_intersect($arr_binary, $arr_binary) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
