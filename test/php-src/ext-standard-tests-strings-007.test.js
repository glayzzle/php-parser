// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/007.phpt
  it("php_strip_whitespace() and output buffer", function () {
    expect(parser.parseCode("<?php\n$file = str_repeat(\"A\", PHP_MAXPATHLEN - strlen(__DIR__ . DIRECTORY_SEPARATOR . __FILE__));\nvar_dump(php_strip_whitespace($file));\nvar_dump(ob_get_contents());\n?>")).toMatchSnapshot();
  });
});
