// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/rfc003.phpt
  it("RFC example: cannot return null with a return type declaration", function () {
    expect(parser.parseCode("<?php\nfunction foo(): DateTime {\n    return null;\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
