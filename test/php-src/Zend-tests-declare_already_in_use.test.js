// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/declare_already_in_use.phpt
  it("Cannot declare class, because the name is already in use", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    class A {}\n}\ntest();\ntest();\n?>")).toMatchSnapshot();
  });
});
