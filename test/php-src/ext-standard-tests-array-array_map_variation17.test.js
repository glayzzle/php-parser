// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_map_variation17.phpt
  it("Test array_map() function : usage variations - unexpected values for 'callback' argument", function () {
    expect(parser.parseCode("<?php\n/*\n * Test array_map() by passing different scalar/nonscalar values in place of $callback\n */\necho \"*** Testing array_map() : unexpected values for 'callback' argument ***\\n\";\n$arr1 = array(1, 2, 3);\n// get a class\nclass classA\n{\n  public function __toString() {\n    return \"Class A object\";\n  }\n}\n// get a resource variable\n$fp = fopen(__FILE__, \"r\");\n// unexpected values to be passed to $input argument\n$unexpected_callbacks = array(\n       // int data\n/*1*/  0,\n       1,\n       12345,\n       -2345,\n       // float data\n/*5*/  10.5,\n       -10.5,\n       12.3456789000e10,\n       12.3456789000E-10,\n       .5,\n       // boolean data\n/*10*/ true,\n       false,\n       TRUE,\n       FALSE,\n       // empty data\n/*14*/ \"\",\n       '',\n       // array data\n/*16*/ array(),\n       array(1, 2),\n       array(1, array(2)),\n       // object data\n/*19*/ new classA(),\n       // resource variable\n/*20*/ $fp\n);\n// loop through each element of $inputs to check the behavior of array_map\nfor($count = 0; $count < count($unexpected_callbacks); $count++) {\n    echo \"\\n-- Iteration \".($count + 1).\" --\\n\";\n    try {\n        var_dump( array_map($unexpected_callbacks[$count], $arr1));\n    } catch (TypeError $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n};\nfclose($fp);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
