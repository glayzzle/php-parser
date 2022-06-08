// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_fill_keys_variation4.phpt
  it("Test array_fill_keys() function : variation of parameter", function () {
    expect(parser.parseCode("<?php\n/* Testing with unexpected argument types */\necho \"*** Testing array_fill_keys() : parameter variations ***\\n\";\n$fp = fopen(__FILE__, \"r\");\n$bool = false;\n$float = 2.4;\n$array = array(\"one\");\n$nullVal = null;\n$unset_var = 10;\nunset ($unset_var);\nclass classA {\n  public function __toString() { return \"Class A object\"; }\n}\n$obj = new classA();\necho \"\\n-- Testing array_fill_keys() function with float --\\n\";\nvar_dump( array_fill_keys($array, $float) );\necho \"\\n-- Testing array_fill_keys() function with null --\\n\";\nvar_dump( array_fill_keys($array, $nullVal) );\necho \"\\n-- Testing array_fill_keys() function with object --\\n\";\nvar_dump( array_fill_keys($array, $obj) );\necho \"\\n-- Testing array_fill_keys() function with boolean --\\n\";\nvar_dump( array_fill_keys($array, $bool) );\necho \"\\n-- Testing array_fill_keys() function with resource --\\n\";\nvar_dump( array_fill_keys($array, $fp) );\necho \"\\n-- Testing array_fill_keys() function with unset var --\\n\";\nvar_dump( array_fill_keys($array, $unset_var) );\nfclose($fp);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
