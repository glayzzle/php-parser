// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/assert/expect_019.phpt
  it("test assertions in namespace (assertions completely disabled)", function () {
    expect(parser.parseCode("<?php\nnamespace Foo;\nvar_dump(\\assert(false));\nvar_dump(\\assert(true));\nvar_dump(assert(false));\nvar_dump(assert(true));\n?>")).toMatchSnapshot();
  });
});
