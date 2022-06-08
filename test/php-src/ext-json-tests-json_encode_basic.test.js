// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/json_encode_basic.phpt
  it("Test json_encode() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing json_encode() : basic functionality ***\\n\";\n//get an unset variable\n$unset_var = 10;\nunset ($unset_var);\n// get a resource variable\n$fp = fopen(__FILE__, \"r\");\n// get an object\nclass sample  {\n}\n$obj = new sample();\n$obj->MyInt = 99;\n$obj->MyFloat = 123.45;\n$obj->MyBool = true;\n$obj->MyNull = null;\n$obj->MyString = \"Hello World\";\n// array with different values for $string\n$inputs =  array (\n    // integers\n    0,\n    123,\n    -123,\n     2147483647,\n    -2147483648,\n    // floats\n    123.456,\n    1.23E3,\n    -1.23E3,\n    // boolean\n    TRUE,\n    true,\n    FALSE,\n    false,\n    // NULL\n    NULL,\n    null,\n    // strings\n    \"abc\",\n    'abc',\n    \"Hello\\t\\tWorld\\n\",\n    // arrays\n    array(),\n    array(1,2,3,4,5),\n    array(1 => \"Sun\", 2 => \"Mon\", 3 => \"Tue\", 4 => \"Wed\", 5 => \"Thur\", 6 => \"Fri\", 7 => \"Sat\"),\n    array(\"Jan\" => 31, \"Feb\" => 29, \"Mar\" => 31, \"April\" => 30, \"May\" => 31, \"June\" => 30),\n    // empty data\n    \"\",\n    '',\n    // undefined data\n    @$undefined_var,\n    // unset data\n    @$unset_var,\n    // resource variable\n    $fp,\n    // object variable\n    $obj\n);\n// loop through with each element of the $inputs array to test json_encode() function\n$count = 1;\nforeach($inputs as $input) {\n    echo \"-- Iteration $count --\\n\";\n    var_dump(json_encode($input));\n    $count ++;\n}\n?>")).toMatchSnapshot();
  });
});
