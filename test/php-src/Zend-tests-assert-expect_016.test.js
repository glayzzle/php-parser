// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/assert/expect_016.phpt
  it("test enable/disable assertions at runtime (assertions not completely disabled)", function () {
    expect(parser.parseCode("<?php\nini_set(\"zend.assertions\", 0);\nvar_dump(assert(false));\nvar_dump(assert(true));\nini_set(\"zend.assertions\", 1);\nvar_dump(assert(false));\nvar_dump(assert(true));\nini_set(\"zend.assertions\", -1);\n?>")).toMatchSnapshot();
  });
});
