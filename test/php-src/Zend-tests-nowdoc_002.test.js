// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nowdoc_002.phpt
  it("basic binary nowdoc syntax", function () {
    expect(parser.parseCode("<?php\nrequire_once 'nowdoc.inc';\nprint b<<<'ENDOFNOWDOC'\nThis is a nowdoc test.\nENDOFNOWDOC;\n$x = b<<<'ENDOFNOWDOC'\nThis is another nowdoc test.\nENDOFNOWDOC;\nprint \"{$x}\";\n?>")).toMatchSnapshot();
  });
});
