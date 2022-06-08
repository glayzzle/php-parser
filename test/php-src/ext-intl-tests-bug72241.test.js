// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug72241.phpt
  it("Bug #72241: get_icu_value_internal out-of-bounds read", function () {
    expect(parser.parseCode("<?php\n$var1=str_repeat(\"A\", 1000);\n$out = locale_get_primary_language($var1);\nvar_dump($out);\n?>")).toMatchSnapshot();
  });
});
