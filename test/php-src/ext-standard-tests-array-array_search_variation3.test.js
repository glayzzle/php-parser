// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_search_variation3.phpt
  it("Test array_search() function : usage variations - haystack as sub-array/object", function () {
    expect(parser.parseCode("<?php\n/* checking for sub-arrays with array_search() */\necho \"*** Testing sub-arrays with array_search() ***\\n\";\n$sub_array = array (\n  \"one\",\n  array(1, 2 => \"two\", \"three\" => 3),\n  4 => \"four\",\n  \"five\" => 5,\n  array('', 'i')\n);\nvar_dump( array_search(\"four\", $sub_array) );\n//checking for element in a sub-array\nvar_dump( array_search(3, $sub_array[1]) );\nvar_dump( array_search(array('','i'), $sub_array) );\n/* checking for objects in array_search() */\necho \"\\n*** Testing objects with array_search() ***\\n\";\nclass array_search_check {\n  public $array_var = array(1=>\"one\", \"two\"=>2, 3=>3);\n  public function foo() {\n    echo \"Public function\\n\";\n  }\n}\n$array_search_obj = new array_search_check();  //creating new object\n//error: as wrong datatype for second argument\ntry {\n    var_dump( array_search(\"array_var\", $array_search_obj) );\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n//error: as wrong datatype for second argument\ntry {\n    var_dump( array_search(\"foo\", $array_search_obj) );\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n//element found as \"one\" exists in array $array_var\nvar_dump( array_search(\"one\", $array_search_obj->array_var) );\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
