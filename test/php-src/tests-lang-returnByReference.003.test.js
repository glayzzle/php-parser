// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/returnByReference.003.phpt
  it("Returning a reference from a function", function () {
    expect(parser.parseCode("<?php\nfunction returnConstantByValue() {\n    return 100;\n}\nfunction &returnConstantByRef() {\n    return 100;\n}\nfunction &returnVariableByRef() {\n    return $GLOBALS['a'];\n}\necho \"\\n---> 1. Trying to assign by reference the return value of a function that returns by value:\\n\";\nunset($a, $b);\n$a = 4;\n$b = &returnConstantByValue();\n$a++;\nvar_dump($a, $b);\necho \"\\n---> 2. Trying to assign by reference the return value of a function that returns a constant by ref:\\n\";\nunset($a, $b);\n$a = 4;\n$b = &returnConstantByRef();\n$a++;\nvar_dump($a, $b);\necho \"\\n---> 3. Trying to assign by reference the return value of a function that returns by ref:\\n\";\nunset($a, $b);\n$a = 4;\n$b = &returnVariableByRef();\n$a++;\nvar_dump($a, $b);\n?>")).toMatchSnapshot();
  });
});
