// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/assert/expect_018.phpt
  it("test assertions in namespace", function () {
    expect(parser.parseCode("<?php\nnamespace Foo;\nini_set(\"zend.assertions\", 0);\nvar_dump(\\assert(false));\nvar_dump(\\assert(true));\nvar_dump(assert(false));\nvar_dump(assert(true));\nini_set(\"zend.assertions\", 1);\nvar_dump(\\assert(false));\nvar_dump(\\assert(true));\nvar_dump(assert(false));\nvar_dump(assert(true));\n?>")).toMatchSnapshot();
  });
});
