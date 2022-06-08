// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/php_gr_jp_16242.phpt
  it("php-users@php.gr.jp #16242", function () {
    expect(parser.parseCode("<?php\nvar_dump(ini_get('mbstring.language'));\nvar_dump(ini_get('internal_encoding'));\nvar_dump(mb_internal_encoding());\n?>")).toMatchSnapshot();
  });
});
