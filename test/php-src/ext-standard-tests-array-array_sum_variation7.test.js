// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_sum_variation7.phpt
  it("Test array_sum() function : usage variations - 'input' array with unexpected values as array element", function () {
    expect(parser.parseCode("<?php\n/*\n* Testing array_sum() with array having other than numeric entries\n*    strings, bool, null, subarrays & objects\n*/\necho \"*** Testing array_sum() : array with unexpected entries ***\\n\";\n// empty array\n$input = array();\necho \"-- empty array --\\n\";\nvar_dump( array_sum($input) );\n// string array\n$input = array('Apple', 'Banana', 'Carrot', 'Mango', 'Orange');\necho \"-- array with string values --\\n\";\nvar_dump( array_sum($input) );\n// bool array\n$input = array( true, true, false, true, false);\necho \"-- array with bool values --\\n\";\nvar_dump( array_sum($input) );\n// array with null entry\n$input = array(null, NULL);\necho \"-- array with null values --\\n\";\nvar_dump( array_sum($input) );\n// array with subarray\n$input = array(\n  array(1, 2),\n  array(),\n  array(0)\n);\necho \"-- array with subarrays --\\n\";\nvar_dump( array_sum($input) );\nclass MyClass\n{\n  public $value;\n  public function __construct($value)\n  {\n    $this->value = $value;\n  }\n}\n// array of objects\n$input = array(\n  new MyClass(2),\n  new MyClass(5),\n  new MyClass(10),\n  new MyClass(0)\n);\necho \"-- array with object values --\\n\";\nvar_dump( array_sum($input) );\n// Mixed values\n$input = array( 5, -8, 7.2, -1.2, \"10\", \"apple\", 'Mango', true, false, null, NULL, array( array(1,2), array(0), array()));\necho \"-- array with mixed values --\\n\";\nvar_dump( array_sum($input) );\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
