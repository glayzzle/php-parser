// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/grapheme_empty.phpt
  it("Test grapheme_strpos-alike functions with empty needle", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nvar_dump(grapheme_strpos(\"abc\", \"\"));\nvar_dump(grapheme_strpos(\"abc\", \"\", -1));\nvar_dump(grapheme_stripos(\"abc\", \"\"));\nvar_dump(grapheme_stripos(\"abc\", \"\", -1));\nvar_dump(grapheme_strrpos(\"abc\", \"\"));\nvar_dump(grapheme_strrpos(\"abc\", \"\", -1));\nvar_dump(grapheme_strripos(\"abc\", \"\"));\nvar_dump(grapheme_strripos(\"abc\", \"\", 1));\nvar_dump(grapheme_strstr(\"abc\", \"\"));\nvar_dump(grapheme_strstr(\"abc\", \"\", true));\nvar_dump(grapheme_stristr(\"abc\", \"\"));\nvar_dump(grapheme_stristr(\"abc\", \"\", true));\nvar_dump(grapheme_strpos(\"äbc\", \"\"));\nvar_dump(grapheme_strpos(\"äbc\", \"\", -1));\nvar_dump(grapheme_stripos(\"äbc\", \"\"));\nvar_dump(grapheme_stripos(\"äbc\", \"\", -1));\nvar_dump(grapheme_strrpos(\"äbc\", \"\"));\nvar_dump(grapheme_strrpos(\"äbc\", \"\", -1));\nvar_dump(grapheme_strripos(\"äbc\", \"\"));\nvar_dump(grapheme_strripos(\"äbc\", \"\", 1));\nvar_dump(grapheme_strstr(\"äbc\", \"\"));\nvar_dump(grapheme_strstr(\"äbc\", \"\", true));\nvar_dump(grapheme_stristr(\"äbc\", \"\"));\nvar_dump(grapheme_stristr(\"äbc\", \"\", true));\n?>")).toMatchSnapshot();
  });
});
