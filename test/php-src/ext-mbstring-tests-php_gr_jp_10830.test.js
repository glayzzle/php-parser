// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/php_gr_jp_10830.phpt
  it("php-users@php.gr.jp #10830", function () {
    expect(parser.parseCode("<?php\n$a=\"aaa\\n<>\";\nvar_dump( mb_ereg(\"^[^><]+$\",$a) );\nvar_dump( !!preg_match(\"/^[^><]+$/\",$a) );\n?>")).toMatchSnapshot();
  });
});
