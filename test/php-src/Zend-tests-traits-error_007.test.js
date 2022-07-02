// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/error_007.phpt
  it("Trying to instantiate a trait", function () {
    expect(parser.parseCode("<?php\ntrait abc {\n}\nnew abc;\n?>")).toMatchSnapshot();
  });
});
