// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/is_callable_variation2.phpt
  it("Test is_callable() function : usage variations - on invalid function names", function () {
    expect(parser.parseCode("<?php\nfunction check_iscallable( $functions ) {\n  $counter = 1;\n  foreach($functions as $func) {\n    echo \"-- Iteration  $counter --\\n\";\n    var_dump( is_callable($func) );  //given only $var argument\n    var_dump( is_callable($func, TRUE) );  //given $var and $syntax argument\n    var_dump( is_callable($func, TRUE, $callable_name) );\n    echo $callable_name, \"\\n\";\n    var_dump( is_callable($func, FALSE) );  //given $var and $syntax argument\n    var_dump( is_callable($func, FALSE, $callable_name) );\n    echo $callable_name, \"\\n\";\n    $counter++;\n  }\n}\necho \"\\n*** Testing is_callable() on invalid function names ***\\n\";\n/* check on unset variables */\n$unset_var = 10;\nunset ($unset_var);\n/* opening file resource type */\n$file_handle = fopen (__FILE__, \"r\");\n$variants = array (\n  NULL,  // NULL as argument\n  0,  // zero as argument\n  1234567890,  // positive value\n  -100123456782,  // negative value\n  -2.000000,  // negative float value\n  .567,  // positive float value\n  FALSE,  // boolean value\n  array(1, 2, 3),  // array\n  @$unset_var,\n  @$undef_var,  //undefined variable\n  $file_handle\n);\n/* use check_iscallable() to check whether given variable is valid function name\n *  expected: false\n */\ncheck_iscallable($variants);\n/* closing resources used */\nfclose($file_handle);\n?>")).toMatchSnapshot();
  });
});
