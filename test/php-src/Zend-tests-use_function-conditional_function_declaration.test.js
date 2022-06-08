// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/use_function/conditional_function_declaration.phpt
  it("function that is conditionally defined is subject to symbol use checks", function () {
    expect(parser.parseCode("<?php\nif (0) {\n    function foo() {\n    }\n}\nuse function bar\\foo;\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
