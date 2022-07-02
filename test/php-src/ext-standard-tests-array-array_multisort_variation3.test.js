// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_multisort_variation3.phpt
  it("Test array_multisort() function : usage variation", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_multisort() : usage variation ***\\n\";\n// Define error handler\nfunction test_error_handler($err_no, $err_msg, $filename, $linenum) {\n    if (error_reporting() & $err_no) {\n        // report non-silenced errors\n        echo \"Error: $err_no - $err_msg, $filename($linenum)\\n\";\n    }\n}\nset_error_handler('test_error_handler');\n// Initialise function arguments not being substituted (if any)\n$ar1 = array(1, 2);\n//get an unset variable\n$unset_var = 10;\nunset ($unset_var);\n// define some classes\nclass classWithToString\n{\n    public function __toString() {\n        return \"Class A object\";\n    }\n}\nclass classWithoutToString\n{\n}\n// heredoc string\n$heredoc = <<<EOT\nhello world\nEOT;\n// add arrays\n$index_array = array (1, 2, 3);\n$assoc_array = array ('one' => 1, 'two' => 2);\n//array of values to iterate over\n$inputs = array(\n      // int data\n      'int 0' => 0,\n      'int 1' => 1,\n      'int 12345' => 12345,\n      'int -12345' => -2345,\n      // float data\n      'float 10.5' => 10.5,\n      'float -10.5' => -10.5,\n      'float 12.3456789000e10' => 12.3456789000e10,\n      'float -12.3456789000e10' => -12.3456789000e10,\n      'float .5' => .5,\n      // null data\n      'uppercase NULL' => NULL,\n      'lowercase null' => null,\n      // boolean data\n      'lowercase true' => true,\n      'lowercase false' =>false,\n      'uppercase TRUE' =>TRUE,\n      'uppercase FALSE' =>FALSE,\n      // empty data\n      'empty string DQ' => \"\",\n      'empty string SQ' => '',\n      // string data\n      'string DQ' => \"string\",\n      'string SQ' => 'string',\n      'mixed case string' => \"sTrInG\",\n      'heredoc' => $heredoc,\n      // object data\n      'instance of classWithToString' => new classWithToString(),\n      'instance of classWithoutToString' => new classWithoutToString(),\n      // undefined data\n      'undefined var' => @$undefined_var,\n      // unset data\n      'unset var' => @$unset_var,\n);\n// loop through each element of the array for ar2\nforeach($inputs as $key =>$value) {\n    echo \"\\n--$key--\\n\";\n    try {\n        var_dump( array_multisort($ar1, SORT_REGULAR, $value) );\n    } catch (\\ValueError | \\TypeError $e) {\n        echo $e->getMessage() . \"\\n\";\n    }\n};\n?>")).toMatchSnapshot();
  });
});
