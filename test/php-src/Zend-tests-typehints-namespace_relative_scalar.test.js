// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/typehints/namespace_relative_scalar.phpt
  it("namespace\\int is not a valid type hint", function () {
    expect(parser.parseCode("<?php\nfunction test(namespace\\int $i) {}\ntest(0);\n?>")).toMatchSnapshot();
  });
});
