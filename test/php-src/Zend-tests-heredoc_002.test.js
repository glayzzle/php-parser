// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/heredoc_002.phpt
  it("basic binary heredoc syntax", function () {
    expect(parser.parseCode("<?php\nrequire_once 'nowdoc.inc';\nprint b<<<ENDOFHEREDOC\nThis is a heredoc test.\nENDOFHEREDOC;\n$x = b<<<ENDOFHEREDOC\nThis is another heredoc test.\nENDOFHEREDOC;\nprint \"{$x}\";\n?>")).toMatchSnapshot();
  });
});
