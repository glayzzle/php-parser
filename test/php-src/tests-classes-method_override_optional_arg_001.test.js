// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/method_override_optional_arg_001.phpt
  it("Method override allows optional default argument", function () {
    expect(parser.parseCode("<?php\nclass A {\n    function foo($arg1 = 1) {\n    }\n}\nclass B extends A {\n    function foo($arg1 = 2, $arg2 = 3) {\n        var_dump($arg1);\n        var_dump($arg2);\n    }\n}\nclass C extends A {\n    function foo() {\n    }\n}\n$b = new B();\n$b->foo(1);\n?>")).toMatchSnapshot();
  });
});
