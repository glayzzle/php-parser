// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nowdoc_012.phpt
  it("Test false labels", function () {
    expect(parser.parseCode("<?php\nrequire_once 'nowdoc.inc';\n$x = <<<'ENDOFNOWDOC'\nThis is a nowdoc test.\nNOTREALLYEND;\nAnother line\nNOTENDEITHER;\nENDOFNOWDOCWILLBESOON\nNow let's finish it\nENDOFNOWDOC;\nprint \"{$x}\\n\";\n?>")).toMatchSnapshot();
  });
});
