// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/sizeof_variation3.phpt
  it("Test sizeof() function : usage variations - checking for infinite recursion in COUNT_RECURSIVE mode", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing sizeof() : usage variations ***\\n\";\necho \"-- Testing sizeof() for infinite recursion with arrays as argument in COUNT_RECURSIVE mode --\\n\";\n$array2 = array ( \"Hi\", \"Hello\",@$a);\n$array3 = array( 'hi', 'hello');\n$a = array ( 1, @$array1, $array2, $array3);\n$array1 = array( array(1, 2), $a);\n$array4 = array( 100, @$array4);\nvar_dump( sizeof($array1, COUNT_RECURSIVE) );\necho \"\\n\";\nvar_dump( sizeof($array4, COUNT_RECURSIVE) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
