// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_values_variation.phpt
  it("Test array_values() function (variation)", function () {
    expect(parser.parseCode("<?php\necho \"\\n*** Testing array_values() with resource type ***\\n\";\n$resource1 = fopen(__FILE__, \"r\");  // Creating a file resource\n$resource2 = opendir(\".\");  // Creating a dir resource\n/* creating an array with resources as elements */\n$arr_resource = array( \"a\" => $resource1, \"b\" => $resource2);\nvar_dump( array_values($arr_resource) );\necho \"\\n*** Testing array_values() with range checking ***\\n\";\n$arr_range = array(\n  2147483647,\n  2147483648,\n  -2147483647,\n  -2147483648,\n  -0,\n  0,\n  -2147483649\n);\nvar_dump( array_values($arr_range) );\necho \"\\n*** Testing array_values() on an array created on the fly ***\\n\";\nvar_dump( array_values(array(1,2,3)) );\nvar_dump( array_values(array()) );  // null array\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
