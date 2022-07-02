// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/get_defined_vars_basic.phpt
  it("Test get_defined_vars() function", function () {
    expect(parser.parseCode("<?php\necho \"Simple testcase for get_defined_vars() function\\n\\n\";\nfunction f1() {\n  echo \"\\n-- Function f1() called --\\n\";\n  $vars = get_defined_vars();\n  if (count($vars) != 0) {\n     echo \"TEST FAILED\\n\";\n  }\n  echo \"\\n-- ..define some local variables --\\n\";\n  $i = 123;\n  $f = 123.456;\n  $b = false;\n  $s = \"Hello World\";\n  $arr = array(1,2,3,4);\n  var_dump( get_defined_vars() );\n  f2();\n}\nfunction f2() {\n  echo \"\\n -- Function f2() called --\\n\";\n  $vars= get_defined_vars();\n  if (count($vars) != 0) {\n     echo \"TEST FAILED\\n\";\n  }\n  echo \"\\n-- ...define some variables --\\n\";\n  $i = 456;\n  $f = 456.678;\n  $b = true;\n  $s = \"Goodnight\";\n  $arr = array(\"foo\", \"bar\");\n  var_dump( get_defined_vars() );\n  echo \"\\n-- ...define some more variables --\\n\";\n  $i1 = 456;\n  $f1 = 456.678;\n  $b1 = true;\n  var_dump( get_defined_vars() );\n}\necho \"\\n-- Get variables at global scope --\\n\";\n$vars = get_defined_vars();\nif (count($vars) == 0) {\n   echo \"TEST FAILED - Global variables missing at global scope\\n\";\n}\n// call a function\nf1();\n?>")).toMatchSnapshot();
  });
});
