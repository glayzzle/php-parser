// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/heredoc_001.phpt
  it("basic heredoc syntax", function () {
    expect(parser.parseCode("<?php\nrequire_once 'nowdoc.inc';\nprint <<<ENDOFHEREDOC\nThis is a heredoc test.\nENDOFHEREDOC;\n$x = <<<ENDOFHEREDOC\nThis is another heredoc test.\nENDOFHEREDOC;\nprint \"{$x}\";\n?>")).toMatchSnapshot();
  });
});
