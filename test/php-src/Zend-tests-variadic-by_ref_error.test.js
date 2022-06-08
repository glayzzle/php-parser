// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/variadic/by_ref_error.phpt
  it("By-ref variadics enforce the reference", function () {
    expect(parser.parseCode("<?php\nfunction test(&... $args) { }\ntest(1);\n?>")).toMatchSnapshot();
  });
});
