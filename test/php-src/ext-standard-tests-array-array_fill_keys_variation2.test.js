// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_fill_keys_variation2.phpt
  it("Test array_fill_keys() function : variation of parameter", function () {
    expect(parser.parseCode("<?php\n/* Testing with reference types for the arguments */\necho \"*** Testing array_fill_keys() : parameter variations ***\\n\";\n$nullVal = null;\n$simpleStr = \"simple\";\n$refString = &$simpleStr;\n$fp = fopen(__FILE__, \"r\");\n$emptyArr = array();\n$bool = false;\n$float = 2.4;\nclass classA {\n  public function __toString() { return \"Class A object\"; }\n}\n$obj = new classA();\necho \"\\n-- Testing array_fill_keys() function with reference value --\\n\";\n$keyedArray = array(\"one\", \"two\");\nvar_dump(array_fill_keys($keyedArray, $refString));\necho \"\\n-- Testing array_fill_keys() function with reference keys --\\n\";\n$refKeys = array(\"one\", &$simpleStr);\n$res = array_fill_keys($refKeys, $simpleStr);\nvar_dump($res);\n$simpleStr = \"bob\";\nvar_dump($res);\necho \"\\n-- Testing array_fill_keys() function with reference array input --\\n\";\n$newArray = array(\"one\", \"two\");\n$refArray = &$newArray;\nvar_dump(array_fill_keys($refArray, $simpleStr));\nfclose($fp);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
