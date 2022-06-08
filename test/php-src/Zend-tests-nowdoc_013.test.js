// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nowdoc_013.phpt
  it("Test whitespace following end of nowdoc", function () {
    expect(parser.parseCode("<?php\n$code = <<<'EOF'\n<?php\n  $x = <<<'EOT'\nsome string    \nEOT\n  $y = 2;\n?>\nEOF;\nhighlight_string($code);\n?>")).toMatchSnapshot();
  });
});
