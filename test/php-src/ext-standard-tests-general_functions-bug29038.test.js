// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug29038.phpt
  it("Bug #29038 (extract(), EXTR_PREFIX_SAME option prefixes empty strings)", function () {
    expect(parser.parseCode("<?php\nfunction my_print_r($a) {\n    ksort($a);\n    print_r($a);\n}\nfunction f1() {\n  $c = extract(array(\"\" => 1),EXTR_PREFIX_SAME,\"prefix\");\n  echo \"Extracted:\";\n  var_dump($c);\n  my_print_r(get_defined_vars());\n}\nfunction f2() {\n  $a = 1;\n  $c = extract(array(\"a\" => 1),EXTR_PREFIX_SAME,\"prefix\");\n  echo \"Extracted:\";\n  var_dump($c);\n  my_print_r(get_defined_vars());\n}\nfunction f3() {\n  $a = 1;\n  $c = extract(array(\"a\" => 1),EXTR_PREFIX_ALL,\"prefix\");\n  echo \"Extracted:\";\n  var_dump($c);\n  my_print_r(get_defined_vars());\n}\nfunction f4() {\n  $c = extract(array(\"\" => 1),EXTR_PREFIX_ALL,\"prefix\");\n  echo \"Extracted:\";\n  var_dump($c);\n  my_print_r(get_defined_vars());\n}\nfunction f5() {\n  $c = extract(array(\"111\" => 1),EXTR_PREFIX_ALL,\"prefix\");\n  echo \"Extracted:\";\n  var_dump($c);\n  my_print_r(get_defined_vars());\n}\nf1();\nf2();\nf3();\nf4();\nf5();\n?>")).toMatchSnapshot();
  });
});
