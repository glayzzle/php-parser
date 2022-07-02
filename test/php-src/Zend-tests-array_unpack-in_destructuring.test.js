// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/array_unpack/in_destructuring.phpt
  it("Spread operator is not supported in destructuring assignments", function () {
    expect(parser.parseCode("<?php\n[$head, ...$tail] = [1, 2, 3];\n?>")).toMatchSnapshot();
  });
});
