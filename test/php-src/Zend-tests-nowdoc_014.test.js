// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nowdoc_014.phpt
  it("Highlighting empty nowdoc", function () {
    expect(parser.parseCode("<?php\n$code = <<<'EOF'\n<?php\n  $x = <<<'EOT'\nEOT\n  $y = 2;\n?>\nEOF;\nhighlight_string($code);\n?>")).toMatchSnapshot();
  });
});
