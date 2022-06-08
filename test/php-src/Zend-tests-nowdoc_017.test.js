// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nowdoc_017.phpt
  it("Testing nowdoc in default value for property", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    public $bar = <<<'EOT'\nbar\nEOT;\n}\nprint \"ok!\\n\";\n?>")).toMatchSnapshot();
  });
});
