// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/heredoc_006.phpt
  it("braced complex variable replacement test (heredoc)", function () {
    expect(parser.parseCode("<?php\nrequire_once 'nowdoc.inc';\nprint <<<ENDOFHEREDOC\nThis is heredoc test #s {$a}, {$b}, {$c['c']}, and {$d->d}.\nENDOFHEREDOC;\n$x = <<<ENDOFHEREDOC\nThis is heredoc test #s {$a}, {$b}, {$c['c']}, and {$d->d}.\nENDOFHEREDOC;\nprint \"{$x}\";\n?>")).toMatchSnapshot();
  });
});
