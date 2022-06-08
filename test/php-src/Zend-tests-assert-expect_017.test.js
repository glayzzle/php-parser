// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/assert/expect_017.phpt
  it("test enable/disable assertions at runtime (assertions completely disabled)", function () {
    expect(parser.parseCode("<?php\nvar_dump(assert(false));\nvar_dump(assert(true));\nini_set(\"zend.assertions\", 0);\nini_set(\"zend.assertions\", 1);\n?>")).toMatchSnapshot();
  });
});
