// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/heredoc_008.phpt
  it("empty doc test (heredoc)", function () {
    expect(parser.parseCode("<?php\nrequire_once 'nowdoc.inc';\nprint <<<ENDOFHEREDOC\nENDOFHEREDOC;\n$x = <<<ENDOFHEREDOC\nENDOFHEREDOC;\nprint \"{$x}\";\n?>")).toMatchSnapshot();
  });
});
