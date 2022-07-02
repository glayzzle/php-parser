// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/heredoc_004.phpt
  it("braces variable replacement test (heredoc)", function () {
    expect(parser.parseCode("<?php\nrequire_once 'nowdoc.inc';\nprint <<<ENDOFHEREDOC\nThis is heredoc test #{$a}.\nENDOFHEREDOC;\n$x = <<<ENDOFHEREDOC\nThis is heredoc test #{$b}.\nENDOFHEREDOC;\nprint \"{$x}\";\n?>")).toMatchSnapshot();
  });
});
