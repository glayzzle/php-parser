// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/method_override_optional_arg_002.phpt
  it("Omitting optional arg in method inherited from abstract class", function () {
    expect(parser.parseCode("<?php\nabstract class A {\n    function foo($arg = 1) {}\n}\nclass B extends A {\n    function foo() {\n        echo \"foo\\n\";\n    }\n}\n$b = new B();\n$b->foo();\n?>")).toMatchSnapshot();
  });
});
