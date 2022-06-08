// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/first_class_callable_optimization.phpt
  it("Check interaction of first-class callables with optimization", function () {
    expect(parser.parseCode("<?php\nfunction test1() {}\nfunction test2() { return 42; }\nvar_dump(test1(...));\nvar_dump(test2(...));\n?>")).toMatchSnapshot();
  });
});
