// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_fill_keys_variation1.phpt
  it("Test array_fill_keys() function : variation of parameter", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_fill_keys() : parameter variations ***\\n\";\n$nullVal = null;\n$simpleStr = \"simple\";\n$fp = fopen(__FILE__, \"r\");\n$emptyArr = array();\n$bool = false;\n$float = 2.4;\nclass classA {\n  public function __toString() { return \"Class A object\"; }\n}\n$obj = new classA();\necho \"\\n-- Testing array_fill_keys() function with empty arguments --\\n\";\nvar_dump( array_fill_keys($emptyArr, $nullVal) );\necho \"\\n-- Testing array_fill_keys() function with keyed array --\\n\";\n$keyedArray = array(\"two\" => 2, \"strk1\" => \"strv1\", 4, $simpleStr);\nvar_dump( array_fill_keys($keyedArray, $simpleStr) );\necho \"\\n-- Testing array_fill_keys() function with mixed array --\\n\";\n$mixedArray = array($fp, $obj, $simpleStr, $emptyArr, 2, $bool, $float);\nvar_dump( array_fill_keys($mixedArray, $simpleStr) );\nfclose($fp);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
