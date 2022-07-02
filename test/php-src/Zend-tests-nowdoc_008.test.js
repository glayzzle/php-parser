// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nowdoc_008.phpt
  it("empty doc test (nowdoc)", function () {
    expect(parser.parseCode("<?php\nrequire_once 'nowdoc.inc';\nprint <<<'ENDOFNOWDOC'\nENDOFNOWDOC;\n$x = <<<'ENDOFNOWDOC'\nENDOFNOWDOC;\nprint \"{$x}\";\n?>")).toMatchSnapshot();
  });
});
