// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/empty_with_expr.phpt
  it("empty() with arbitrary expressions", function () {
    expect(parser.parseCode("<?php\nfunction getEmptyArray() { return []; }\nfunction getNonEmptyArray() { return [1, 2, 3]; }\nvar_dump(empty([]));\nvar_dump(empty([1, 2, 3]));\nvar_dump(empty(getEmptyArray()));\nvar_dump(empty(getNonEmptyArray()));\nvar_dump(empty([] + []));\nvar_dump(empty([1, 2, 3] + []));\nvar_dump(empty(\"string\"));\nvar_dump(empty(\"\"));\nvar_dump(empty(true));\nvar_dump(empty(false));\n?>")).toMatchSnapshot();
  });
});
