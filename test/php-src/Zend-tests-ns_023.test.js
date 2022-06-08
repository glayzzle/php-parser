// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_023.phpt
  it("023: __NAMESPACE__ constant", function () {
    expect(parser.parseCode("<?php\nnamespace test\\foo;\nvar_dump(__NAMESPACE__);\n?>")).toMatchSnapshot();
  });
});
