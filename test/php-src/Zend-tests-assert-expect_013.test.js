// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/assert/expect_013.phpt
  it("test failing assertion when disabled (with return value)", function () {
    expect(parser.parseCode("<?php\nvar_dump(assert(false));\n?>")).toMatchSnapshot();
  });
});
