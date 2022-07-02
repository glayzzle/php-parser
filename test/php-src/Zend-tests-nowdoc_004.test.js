// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nowdoc_004.phpt
  it("braces variable replacement test (nowdoc)", function () {
    expect(parser.parseCode("<?php\nrequire_once 'nowdoc.inc';\nprint <<<'ENDOFNOWDOC'\nThis is nowdoc test #{$a}.\nENDOFNOWDOC;\n$x = <<<'ENDOFNOWDOC'\nThis is nowdoc test #{$b}.\nENDOFNOWDOC;\nprint \"{$x}\";\n?>")).toMatchSnapshot();
  });
});
