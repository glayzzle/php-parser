// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug62082.phpt
  it("Bug #62082: Memory corruption in internal get_icu_disp_value_src_php()", function () {
    expect(parser.parseCode("<?php\nvar_dump(locale_get_display_name(str_repeat(\"a\", 300), null));\nvar_dump(locale_get_display_name(str_repeat(\"a\", 512), null));\nvar_dump(locale_get_display_name(str_repeat(\"a\", 600), null));\n?>")).toMatchSnapshot();
  });
});
