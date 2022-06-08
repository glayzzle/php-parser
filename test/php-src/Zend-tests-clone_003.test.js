// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/clone_003.phpt
  it("Using clone statement on undefined variable", function () {
    expect(parser.parseCode("<?php\n$a = clone $b;\n?>")).toMatchSnapshot();
  });
});
