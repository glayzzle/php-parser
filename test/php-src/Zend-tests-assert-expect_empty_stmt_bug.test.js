// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/assert/expect_empty_stmt_bug.phpt
  it("Empty statement in assert() shouldn't segfault", function () {
    expect(parser.parseCode("<?php\nassert((function () { return true; })());\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
