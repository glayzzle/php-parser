// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug79783.phpt
  it("Bug #79783: Segfault in php_str_replace_common", function () {
    expect(parser.parseCode("<?php\nstr_replace(\"a\", \"b\", \"c\", strlen(\"d\"));\n?>")).toMatchSnapshot();
  });
});
