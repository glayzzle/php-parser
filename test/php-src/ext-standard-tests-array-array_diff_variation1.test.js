// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_diff_variation1.phpt
  it("Test array_diff() function : usage variations - unexpected values for 'array1' argument", function () {
    expect(parser.parseCode("<?php\n/*\n * Test array_diff by passing non array values in place of $array1\n */\necho \"*** Testing array_diff() : usage variations ***\\n\";\n$array = array(1, 2, 3);\n//get an unset variable\n$unset_var = 10;\nunset ($unset_var);\n// get a class\nclass classA\n{\n  public function __toString() {\n    return \"Class A object\";\n  }\n}\n// heredoc string\n$heredoc = <<<EOT\nhello world\nEOT;\n// get a resource variable\n$fp = fopen(__FILE__, \"r\");\n// unexpected values to be passed to $input argument\n$inputs = array(\n       // int data\n/*1*/  0,\n       1,\n       12345,\n       -2345,\n       // float data\n/*5*/  10.5,\n       -10.5,\n       12.3456789000e10,\n       12.3456789000E-10,\n       .5,\n       // null data\n/*10*/ NULL,\n       null,\n       // boolean data\n/*12*/ true,\n       false,\n       TRUE,\n       FALSE,\n       // empty data\n/*16*/ \"\",\n       '',\n       // string data\n/*18*/ \"string\",\n       'string',\n       $heredoc,\n       // binary data\n/*21*/ b\"binary\",\n       (binary)\"binary\",\n       // object data\n/*23*/ new classA(),\n       // undefined data\n/*24*/ @$undefined_var,\n       // unset data\n/*25*/ @$unset_var,\n       // resource variable\n/*26*/ $fp\n);\n// loop through each element of $inputs to check the behavior of array_diff\n$iterator = 1;\nforeach($inputs as $input) {\n    echo \"\\n-- Iteration $iterator --\";\n    try {\n        var_dump( array_diff($input, $array));\n    } catch (TypeError $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n    $iterator++;\n};\nfclose($fp);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
