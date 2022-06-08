// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/is_callable_basic1.phpt
  it("Test is_callable() function : usage variations - defined functions", function () {
    expect(parser.parseCode("<?php\nfunction check_iscallable( $functions ) {\n  $counter = 1;\n  foreach($functions as $func) {\n    echo \"-- Iteration  $counter --\\n\";\n    var_dump( is_callable($func) );  //given only $var argument\n    var_dump( is_callable($func, TRUE) );  //given $var and $syntax argument\n    var_dump( is_callable($func, TRUE, $callable_name) );\n    echo $callable_name, \"\\n\";\n    var_dump( is_callable($func, FALSE) );  //given $var and $syntax argument\n    var_dump( is_callable($func, FALSE, $callable_name) );\n    echo $callable_name, \"\\n\";\n    $counter++;\n  }\n}\necho \"\\n*** Testing is_callable() on defined functions ***\\n\";\n/* function name with simple string */\nfunction someFunction() {\n}\n/* function name with mixed string and integer */\nfunction x123() {\n}\n/* function name as NULL */\nfunction NULL() {\n}\n/* function name with boolean name */\nfunction false() {\n}\n/* function name with string and special character */\nfunction Hello_World() {\n}\n$defined_functions = array (\n  $functionVar1 = 'someFunction',\n  $functionVar2 = 'x123',\n  $functionVar3 = 'NULL',\n  $functionVar4 = 'false',\n  $functionVar5 = \"Hello_World\"\n);\n/* use check_iscallable() to check whether given string is valid function name\n *  expected: true as it is valid callback\n */\ncheck_iscallable($defined_functions);\n?>")).toMatchSnapshot();
  });
});
