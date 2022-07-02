// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug44830.phpt
  it("Bug #44830 (Very minor issue with backslash in heredoc)", function () {
    expect(parser.parseCode("<?php\n$backslash = <<<EOT\n\\\nEOT;\nvar_dump($backslash);\n?>")).toMatchSnapshot();
  });
});
