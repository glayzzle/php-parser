// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/heredoc_014.phpt
  it("Heredoc with double quotes syntax but missing second quote", function () {
    expect(() => parser.parseCode("<?php\n$test = \"foo\";\n$var = <<<\"MYLABEL\ntest: $test\nMYLABEL;\necho $var;\n?>")).toThrowErrorMatchingSnapshot();
  });
});
