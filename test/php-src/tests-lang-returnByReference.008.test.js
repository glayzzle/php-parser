// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/returnByReference.008.phpt
  it("Returning a reference from a non-static method via another non-static method", function () {
    expect(parser.parseCode("<?php\nclass C {\n    function returnConstantByValue() {\n        return 100;\n    }\n    function &returnConstantByRef() {\n        return 100;\n    }\n    function &returnVariableByRef() {\n        return $GLOBALS['a'];\n    }\n    function &returnFunctionCallByRef($functionToCall) {\n        return $this->$functionToCall();\n    }\n}\n$c = new C;\necho \"\\n---> 1. Via a return by ref function call, assign by reference the return value of a function that returns by value:\\n\";\nunset($a, $b);\n$a = 4;\n$b = &$c->returnFunctionCallByRef('returnConstantByValue');\n$a++;\nvar_dump($a, $b);\necho \"\\n---> 2. Via a return by ref function call, assign by reference the return value of a function that returns a constant by ref:\\n\";\nunset($a, $b);\n$a = 4;\n$b = &$c->returnFunctionCallByRef('returnConstantByRef');\n$a++;\nvar_dump($a, $b);\necho \"\\n---> 3. Via a return by ref function call, assign by reference the return value of a function that returns by ref:\\n\";\nunset($a, $b);\n$a = 4;\n$b = &$c->returnFunctionCallByRef('returnVariableByRef');\n$a++;\nvar_dump($a, $b);\n?>")).toMatchSnapshot();
  });
});
