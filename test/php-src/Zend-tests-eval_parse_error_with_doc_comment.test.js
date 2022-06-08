// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/eval_parse_error_with_doc_comment.phpt
  it("eval() parse error on function with doc comment", function () {
    expect(() => parser.parseCode("<?php\neval(\n<<<EOC\n/** doc comment */\nfunction f() {\nEOC\n);\n?>")).toThrowErrorMatchingSnapshot();
  });
});
