// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/php_gr_jp_dev_884-1.phpt
  it("php-dev@php.gr.jp #884 (1)", function () {
    expect(parser.parseCode("<?php\nset_time_limit(2);\nvar_dump(preg_replace(\"/.*/\", \"b\", \"a\"));\nvar_dump(mb_ereg_replace(\".*\", \"b\", \"a\"));\n?>")).toMatchSnapshot();
  });
});
