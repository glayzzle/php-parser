// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_001.phpt
  it("Closure 001: Lambda without lexical variables", function () {
    expect(parser.parseCode("<?php\n$lambda1 = function () {\n    echo \"Hello World!\\n\";\n};\n$lambda2 = function ($x) {\n    echo \"Hello $x!\\n\";\n};\nvar_dump(is_callable($lambda1));\nvar_dump(is_callable($lambda2));\n$lambda1();\n$lambda2(\"Universe\");\ncall_user_func($lambda1);\ncall_user_func($lambda2, \"Universe\");\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
