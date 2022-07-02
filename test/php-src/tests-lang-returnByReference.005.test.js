// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/returnByReference.005.phpt
  it("Returning a reference from a method", function () {
    expect(parser.parseCode("<?php\nClass C {\n    function returnConstantByValue() {\n        return 100;\n    }\n    function &returnConstantByRef() {\n        return 100;\n    }\n    static function &returnVariableByRef() {\n        return $GLOBALS['a'];\n    }\n}\n$c = new C;\necho \"\\n---> 1. Trying to assign by reference the return value of a function that returns by value:\\n\";\nunset($a, $b);\n$a = 4;\n$b = &$c->returnConstantByValue();\n$a++;\nvar_dump($a, $b);\necho \"\\n---> 2. Trying to assign by reference the return value of a function that returns a constant by ref:\\n\";\nunset($a, $b);\n$a = 4;\n$b = &$c->returnConstantByRef();\n$a++;\nvar_dump($a, $b);\necho \"\\n---> 3. Trying to assign by reference the return value of a function that returns by ref:\\n\";\nunset($a, $b);\n$a = 4;\n$b = &$c->returnVariableByRef();\n$a++;\nvar_dump($a, $b);\n?>")).toMatchSnapshot();
  });
});
