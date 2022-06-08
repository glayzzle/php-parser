// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/function_redecl.phpt
  it("Function redeclaration must produce a simple fatal", function () {
    expect(parser.parseCode("<?php\nfunction f() {}\nfunction f() {}\n?>")).toMatchSnapshot();
  });
});
