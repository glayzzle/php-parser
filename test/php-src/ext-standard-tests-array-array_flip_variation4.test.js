// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_flip_variation4.phpt
  it("Test array_flip() function : usage variations - 'input' argument with different invalid values for keys", function () {
    expect(parser.parseCode("<?php\n/*\n* Trying different invalid values for 'input' array argument\n*/\necho \"*** Testing array_flip() : different invalid values in 'input' array argument ***\\n\";\n// class definition for object data\nclass MyClass\n{\n   public function __toString()\n   {\n     return 'object';\n   }\n}\n$obj = new MyClass();\n// resource data\n$fp = fopen(__FILE__, 'r');\n$input = array(\n  // float values\n  'float_value1' => 1.2,\n  'float_value2' => 0.5,\n  'flaot_value3' => 3.4E3,\n  'flaot_value4' => 5.6E-6,\n  // bool values\n  'bool_value1' => true,\n  'bool_value2' => false,\n  'bool_value3' => TRUE,\n  'bool_value4' => FALSE,\n  // null values\n  'null_value1' => null,\n  // array value\n  'array_value' => array(1),\n  // object value\n  'obj_value' => $obj,\n  // resource value\n  'resource_value' => $fp,\n);\nvar_dump( array_flip($input) );\n// closing resource\nfclose($fp);\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
