// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/heredoc_012.phpt
  it("Heredoc with double quotes", function () {
    expect(parser.parseCode("<?php\n$test = \"foo\";\n$var = <<<\"MYLABEL\"\ntest: $test\nMYLABEL;\necho $var;\n?>")).toMatchSnapshot();
  });
});
