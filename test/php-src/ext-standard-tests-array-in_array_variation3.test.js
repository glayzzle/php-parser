// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/in_array_variation3.phpt
  it("Test in_array() function : usage variations - haystack as sub-array/object", function () {
    expect(parser.parseCode("<?php\n/* Test in_array() with haystack as sub-array and object */\n/* checking for sub-arrays with in_array() */\necho \"*** Testing sub-arrays with in_array() ***\\n\";\n$sub_array = array (\n  \"one\",\n  array(1, 2 => \"two\", \"three\" => 3),\n  4 => \"four\",\n  \"five\" => 5,\n  array('', 'i')\n);\nvar_dump( in_array(\"four\", $sub_array) );\n//checking for element in a sub-array\nvar_dump( in_array(3, $sub_array[1]) );\nvar_dump( in_array(array('','i'), $sub_array) );\n/* checking for objects in in_array() */\necho \"\\n*** Testing objects with in_array() ***\\n\";\nclass in_array_check {\n  public $array_var = array(1=>\"one\", \"two\"=>2, 3=>3);\n  public function foo() {\n    echo \"Public function\\n\";\n  }\n}\n$in_array_obj = new in_array_check();  //creating new object\n//error: as wrong datatype for second argument\ntry {\n    var_dump( in_array(\"array_var\", $in_array_obj) );\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n//error: as wrong datatype for second argument\ntry {\n    var_dump( in_array(\"foo\", $in_array_obj) );\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n//element found as \"one\" exists in array $array_var\nvar_dump( in_array(\"one\", $in_array_obj->array_var) );\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
