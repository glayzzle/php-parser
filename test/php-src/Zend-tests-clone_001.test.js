// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/clone_001.phpt
  it("Using clone statement on non-object", function () {
    expect(parser.parseCode("<?php\n$a = clone array();\n?>")).toMatchSnapshot();
  });
});
