// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/try_finally_recursive_previous.phpt
  it("Test case where the implicit previous finally exception would result in recursion", function () {
    expect(parser.parseCode("<?php\ntry {\n    $e = new Exception(\"M1\");\n    try {\n        throw new Exception(\"M2\", 0, $e);\n    } finally {\n        throw $e;\n    }\n} finally {}\n?>")).toMatchSnapshot();
  });
});
