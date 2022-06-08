// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug77359.phpt
  it("Bug #77359: spl_autoload causes segfault", function () {
    expect(parser.parseCode("<?php\n$str = \"foo\";\n$str .= \"bar\";\nspl_autoload($str);\nspl_autoload($str);\nvar_dump($str);\n?>")).toMatchSnapshot();
  });
});
