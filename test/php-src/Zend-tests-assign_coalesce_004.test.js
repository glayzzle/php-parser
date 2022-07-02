// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/assign_coalesce_004.phpt
  it("Coalesce assign (??=): Non-writable variable", function () {
    expect(parser.parseCode("<?php\nfunction foo() { return 123; }\nfoo() ??= 456;\n?>")).toMatchSnapshot();
  });
});
