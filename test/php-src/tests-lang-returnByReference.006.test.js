// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/returnByReference.006.phpt
  it("Returning a reference from a function via another function", function () {
    expect(parser.parseCode("<?php\nfunction returnConstantByValue() {\n    return 100;\n}\nfunction &returnConstantByRef() {\n    return 100;\n}\nfunction &returnVariableByRef() {\n    return $GLOBALS['a'];\n}\nfunction &returnFunctionCallByRef($functionToCall) {\n    return $functionToCall();\n}\necho \"\\n---> 1. Via a return by ref function call, assign by reference the return value of a function that returns by value:\\n\";\nunset($a, $b);\n$a = 4;\n$b = &returnFunctionCallByRef('returnConstantByValue');\n$a++;\nvar_dump($a, $b);\necho \"\\n---> 2. Via a return by ref function call, assign by reference the return value of a function that returns a constant by ref:\\n\";\nunset($a, $b);\n$a = 4;\n$b = &returnFunctionCallByRef('returnConstantByRef');\n$a++;\nvar_dump($a, $b);\necho \"\\n---> 3. Via a return by ref function call, assign by reference the return value of a function that returns by ref:\\n\";\nunset($a, $b);\n$a = 4;\n$b = &returnFunctionCallByRef('returnVariableByRef');\n$a++;\nvar_dump($a, $b);\n?>")).toMatchSnapshot();
  });
});
