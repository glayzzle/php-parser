// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/heredoc_013.phpt
  it("Heredoc with double quotes and wrong prefix", function () {
    expect(() => parser.parseCode("<?php\n$test = \"foo\";\n$var = prefix<<<\"MYLABEL\"\ntest: $test\nMYLABEL;\necho $var;\n?>")).toThrowErrorMatchingSnapshot();
  });
});
