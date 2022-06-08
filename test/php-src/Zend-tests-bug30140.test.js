// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug30140.phpt
  it("Bug #30140 (Problem with array in static properties)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public static $test1 = true;\n    public static $test2 = array();\n    public static $test3 = \"str\";\n}\nclass B extends A {\n}\nA::$test1 = \"x\";\nA::$test2 = \"y\";\nA::$test3 = \"z\";\nvar_dump(A::$test1);\nvar_dump(A::$test2);\nvar_dump(A::$test3);\nvar_dump(B::$test1);\nvar_dump(B::$test2);\nvar_dump(B::$test3);\n?>")).toMatchSnapshot();
  });
});
