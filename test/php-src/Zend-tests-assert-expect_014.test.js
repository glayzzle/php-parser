// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/assert/expect_014.phpt
  it("test failing assertion when disabled", function () {
    expect(parser.parseCode("<?php\nassert(false);\nvar_dump(true);\n?>")).toMatchSnapshot();
  });
});
