// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/php_gr_jp_dev_884-2.phpt
  it("php-dev@php.gr.jp #884 (2)", function () {
    expect(parser.parseCode("<?php\nvar_dump(mb_ereg_replace(\"C?$\", \"Z\", \"ABC\"));\nvar_dump(preg_replace(\"/C?$/\", \"Z\", \"ABC\"));\nvar_dump(mb_ereg_replace(\"C*$\", \"Z\", \"ABC\"));\nvar_dump(preg_replace(\"/C*$/\", \"Z\", \"ABC\"));\n?>")).toMatchSnapshot();
  });
});
