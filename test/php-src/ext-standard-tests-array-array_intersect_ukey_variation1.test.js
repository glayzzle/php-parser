// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_intersect_ukey_variation1.phpt
  it("Test array_intersect_ukey() function : usage variation - Passing unexpected values to first argument", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_intersect_ukey() : usage variation ***\\n\";\n//Initialise arguments\n$array2 = array('green' => 5, 'blue' => 6, 'yellow' => 7, 'cyan'   => 8);\n$array3 = array('green' => 5, 'cyan'   => 8);\n//Call back function\nfunction key_compare_func($key1, $key2)\n{\n    if ($key1 == $key2)\n        return 0;\n    else\n        return ($key1 > $key2)? 1:-1;\n}\n//get an unset variable\n$unset_var = 10;\nunset ($unset_var);\n//resource variable\n$fp = fopen(__FILE__, \"r\");\n// define some classes\nclass classWithToString\n{\n    public function __toString() {\n        return \"Class A object\";\n    }\n}\nclass classWithoutToString\n{\n}\n// heredoc string\n$heredoc = <<<EOT\nhello world\nEOT;\n//array of values to iterate over\n$inputs = array(\n      // int data\n      'int 0' => 0,\n      'int 1' => 1,\n      'int 12345' => 12345,\n      'int -12345' => -12345,\n      // float data\n      'float 10.5' => 10.5,\n      'float -10.5' => -10.5,\n      'float 12.3456789000e10' => 12.3456789000e10,\n      'float -12.3456789000e10' => -12.3456789000e10,\n      'float .5' => .5,\n      // null data\n      'uppercase NULL' => NULL,\n      'lowercase null' => null,\n      // boolean data\n      'lowercase true' => true,\n      'lowercase false' =>false,\n      'uppercase TRUE' =>TRUE,\n      'uppercase FALSE' =>FALSE,\n      // empty data\n      'empty string DQ' => \"\",\n      'empty string SQ' => '',\n      // string data\n      'string DQ' => \"string\",\n      'string SQ' => 'string',\n      'mixed case string' => \"sTrInG\",\n      'heredoc' => $heredoc,\n      // object data\n      'instance of classWithToString' => new classWithToString(),\n      'instance of classWithoutToString' => new classWithoutToString(),\n      // undefined data\n      'undefined var' => @$undefined_var,\n      // unset data\n      'unset var' => @$unset_var,\n      // resource data\n      'resource var' => $fp,\n);\n// loop through each element of the array for array1\nforeach($inputs as $key =>$value) {\n    echo \"\\n--$key--\\n\";\n    try {\n        var_dump( array_intersect_ukey($value, $array2, 'key_compare_func') );\n    } catch (TypeError $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n    try {\n        var_dump( array_intersect_ukey($value, $array2, $array3, 'key_compare_func') );\n    } catch (TypeError $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n};\nfclose($fp);\n?>")).toMatchSnapshot();
  });
});
