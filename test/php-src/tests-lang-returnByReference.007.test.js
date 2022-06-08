// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/returnByReference.007.phpt
  it("Returning a reference from a static method via another static method", function () {
    expect(parser.parseCode("<?php\nclass C {\n    static function returnConstantByValue() {\n        return 100;\n    }\n    static function &returnConstantByRef() {\n        return 100;\n    }\n    static function &returnVariableByRef() {\n        return $GLOBALS['a'];\n    }\n    static function &returnFunctionCallByRef($functionToCall) {\n        return C::$functionToCall();\n    }\n}\necho \"\\n---> 1. Via a return by ref function call, assign by reference the return value of a function that returns by value:\\n\";\nunset($a, $b);\n$a = 4;\n$b = &C::returnFunctionCallByRef('returnConstantByValue');\n$a++;\nvar_dump($a, $b);\necho \"\\n---> 2. Via a return by ref function call, assign by reference the return value of a function that returns a constant by ref:\\n\";\nunset($a, $b);\n$a = 4;\n$b = &C::returnFunctionCallByRef('returnConstantByRef');\n$a++;\nvar_dump($a, $b);\necho \"\\n---> 3. Via a return by ref function call, assign by reference the return value of a function that returns by ref:\\n\";\nunset($a, $b);\n$a = 4;\n$b = &C::returnFunctionCallByRef('returnVariableByRef');\n$a++;\nvar_dump($a, $b);\n?>")).toMatchSnapshot();
  });
});
