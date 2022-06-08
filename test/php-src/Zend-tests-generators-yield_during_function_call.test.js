// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/yield_during_function_call.phpt
  it("\"yield\" can occur during a function call", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n    var_dump(str_repeat(\"x\", yield));\n}\n$gen = gen();\n$gen->send(10);\n?>")).toMatchSnapshot();
  });
});
