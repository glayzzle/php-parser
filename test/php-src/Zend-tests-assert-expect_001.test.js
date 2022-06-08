// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/assert/expect_001.phpt
  it("test passing assertion", function () {
    expect(parser.parseCode("<?php\nassert(true);\nvar_dump(true);\n?>")).toMatchSnapshot();
  });
});
