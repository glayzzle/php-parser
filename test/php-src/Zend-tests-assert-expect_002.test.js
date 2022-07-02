// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/assert/expect_002.phpt
  it("test failing assertion", function () {
    expect(parser.parseCode("<?php\nassert(false);\nvar_dump(true);\n?>")).toMatchSnapshot();
  });
});
