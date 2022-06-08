// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/is_callable_variation1.phpt
  it("Test is_callable() function : usage variations - undefined functions", function () {
    expect(parser.parseCode("<?php\nfunction check_iscallable( $functions ) {\n  $counter = 1;\n  foreach($functions as $func) {\n    echo \"-- Iteration  $counter --\\n\";\n    var_dump( is_callable($func) );  //given only $var argument\n    var_dump( is_callable($func, TRUE) );  //given $var and $syntax argument\n    var_dump( is_callable($func, TRUE, $callable_name) );\n    echo json_encode($callable_name) . \"\\n\";\n    var_dump( is_callable($func, FALSE) );  //given $var and $syntax argument\n    var_dump( is_callable($func, FALSE, $callable_name) );\n    echo json_encode($callable_name) . \"\\n\";\n    $counter++;\n  }\n}\necho \"\\n*** Testing is_callable() on undefined functions ***\\n\";\n$undef_functions = array (\n  \"\",  //empty string\n  '',\n  \" \",  //string with a space\n  ' ',\n  \"12356\",\n  \"\\0\",\n  '\\0',\n  \"hello world\",\n  'hello world',\n  \"welcome\\0\",\n  'welcome\\0',\n  \"==%%%***$$$@@@!!\",\n  \"false\",\n  \"\\070\",\n  '\\t',  //escape character\n  '\\007',\n  '123',\n  'echo()'\n);\n/* use check_iscallable() to check whether given string is valid function name\n * expected: true with $syntax = TRUE\n *           false with $syntax = FALSE\n */\ncheck_iscallable($undef_functions);\n?>")).toMatchSnapshot();
  });
});
