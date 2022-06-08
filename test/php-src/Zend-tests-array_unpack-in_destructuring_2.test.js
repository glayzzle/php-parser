// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/array_unpack/in_destructuring_2.phpt
  it("Spread operator is not supported in destructuring assignments (only spread)", function () {
    expect(parser.parseCode("<?php\n[...$x] = [1, 2, 3];\n?>")).toMatchSnapshot();
  });
});
