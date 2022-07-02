// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug35655.phpt
  it("Bug #35655 (whitespace following end of heredoc is lost)", function () {
    expect(parser.parseCode("<?php\n$code = '\n<?php\n  $x = <<<EOT\nsome string    \nEOT\n  $y = 2;\n?>';\nhighlight_string($code);\n?>")).toMatchSnapshot();
  });
});
