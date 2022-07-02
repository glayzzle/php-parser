// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/unterminated_comment.phpt
  it("Unterminated comment", function () {
    expect(() => parser.parseCode("<?php\n/* Foo\nBar")).toThrowErrorMatchingSnapshot();
  });
});
