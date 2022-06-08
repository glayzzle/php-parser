// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/oct_whitespace.phpt
  it("Octal literal followed by whitespace and another number", function () {
    expect(() => parser.parseCode("<?php\nvar_dump(0o0 2);\n?>")).toThrowErrorMatchingSnapshot();
  });
});
