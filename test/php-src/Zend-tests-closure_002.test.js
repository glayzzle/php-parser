// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_002.phpt
  it("Closure 002: Lambda with lexical variables (global scope)", function () {
    expect(parser.parseCode("<?php\n$x = 4;\n$lambda1 = function () use ($x) {\n    echo \"$x\\n\";\n};\n$lambda2 = function () use (&$x) {\n    echo \"$x\\n\";\n};\n$lambda1();\n$lambda2();\n$x++;\n$lambda1();\n$lambda2();\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
