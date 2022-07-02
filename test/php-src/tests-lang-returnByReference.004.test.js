// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/returnByReference.004.phpt
  it("Returning a reference from a static method", function () {
    expect(parser.parseCode("<?php\nClass C {\n    static function returnConstantByValue() {\n        return 100;\n    }\n    static function &returnConstantByRef() {\n        return 100;\n    }\n    static function &returnVariableByRef() {\n        return $GLOBALS['a'];\n    }\n}\necho \"\\n---> 1. Trying to assign by reference the return value of a function that returns by value:\\n\";\nunset($a, $b);\n$a = 4;\n$b = &C::returnConstantByValue();\n$a++;\nvar_dump($a, $b);\necho \"\\n---> 2. Trying to assign by reference the return value of a function that returns a constant by ref:\\n\";\nunset($a, $b);\n$a = 4;\n$b = &C::returnConstantByRef();\n$a++;\nvar_dump($a, $b);\necho \"\\n---> 3. Trying to assign by reference the return value of a function that returns by ref:\\n\";\nunset($a, $b);\n$a = 4;\n$b = &C::returnVariableByRef();\n$a++;\nvar_dump($a, $b);\n?>")).toMatchSnapshot();
  });
});
