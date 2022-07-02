// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/error_016.phpt
  it("Trying to create a constant on Trait", function () {
    expect(parser.parseCode("<?php\ntrait foo {\n    const a = 1;\n}\n?>")).toMatchSnapshot();
  });
});
