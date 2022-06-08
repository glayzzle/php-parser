// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nowdoc_001.phpt
  it("basic nowdoc syntax", function () {
    expect(parser.parseCode("<?php\nrequire_once 'nowdoc.inc';\nprint <<<'ENDOFNOWDOC'\nThis is a nowdoc test.\nENDOFNOWDOC;\n$x = <<<'ENDOFNOWDOC'\nThis is another nowdoc test.\nWith another line in it.\nENDOFNOWDOC;\nprint \"{$x}\";\n?>")).toMatchSnapshot();
  });
});
