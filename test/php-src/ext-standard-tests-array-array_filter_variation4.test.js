// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_filter_variation4.phpt
  it("Test array_filter() function : usage variations - Different types of 'callback' function", function () {
    expect(parser.parseCode("<?php\n/*\n* Passing different types of callback functions to array_filter()\n* with parameters and return\n* without parameter and with return\n* with parameter and without return\n* without parameter and without return\n*/\necho \"*** Testing array_filter() : usage variation - different 'callback' functions***\\n\";\n// Initialize variables\n$input = array(0, -1, 2, 3.4E-3, 'hello', \"value\", \"key\" => 4, 'null' => NULL);\nfunction callback1()\n{\n  return 1;\n}\necho \"-- Callback function without parameter and with return --\\n\";\nvar_dump( array_filter($input, \"callback1\") );\n// callback function with parameter and without return value\nfunction callback2($input)\n{\n}\necho \"-- Callback function with parameter and without return --\\n\";\nvar_dump( array_filter($input, \"callback2\") );\nfunction callback3()\n{\n}\necho \"-- Callback function without parameter and return --\\n\";\nvar_dump( array_filter($input, \"callback3\") );\n// callback function with parameter and with return value\nfunction callback4($input)\n{\n  if($input > 0 ) {\n    return true;\n  }\n  else {\n    return false;\n  }\n}\necho \"-- Callback function with parameter and return --\\n\";\nvar_dump( array_filter($input, \"callback4\") );\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
