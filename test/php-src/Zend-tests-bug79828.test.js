// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug79828.phpt
  it("Bug #79828: Segfault when trying to access non-existing variable", function () {
    expect(parser.parseCode("<?php\nfunction foo(): AnyType {\n   return $uninitialized;\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
