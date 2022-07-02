// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_intersect_assoc_basic.phpt
  it("Test array_intersect_assoc() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n* Testing the behavior of array_intersect_assoc() by passing different arrays for the arguments.\n* Function is tested by passing associative array as well as array with default keys.\n*/\necho \"*** Testing array_intersect_assoc() : basic functionality ***\\n\";\n// array with default keys\n$arr_default_keys = array(1, 2, \"hello\", 'world');\n// associative array\n$arr_associative = array(\"one\" => 1, \"two\" => 2);\n// default key array for both $arr1 and $arr2 argument\nvar_dump( array_intersect_assoc($arr_default_keys, $arr_default_keys) );\n// default key array for $arr1 and associative array for $arr2 argument\nvar_dump( array_intersect_assoc($arr_default_keys, $arr_associative) );\n// associative array for $arr1 and default key array for $arr2\nvar_dump( array_intersect_assoc($arr_associative, $arr_default_keys) );\n// associative array for both $arr1 and $arr2 argument\nvar_dump( array_intersect_assoc($arr_associative, $arr_associative) );\n// more arrays to be intersected\n$arr3 = array(2, 3, 4);\nvar_dump( array_intersect_assoc($arr_default_keys, $arr_associative, $arr3) );\nvar_dump( array_intersect_assoc($arr_associative, $arr_default_keys, $arr3, $arr_associative) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
