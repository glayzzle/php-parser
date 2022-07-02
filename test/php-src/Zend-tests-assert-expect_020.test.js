// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/assert/expect_020.phpt
  it("AST pretty-printer", function () {
    expect(parser.parseCode("<?php\nassert(0 && ($a = function () {\n    $var = 'test';\n    $str = \"$var, $var[1], {$var}[], {$var[1]}[], ${var}[], ${var[1]}[]\";\n}));\n?>")).toMatchSnapshot();
  });
});
