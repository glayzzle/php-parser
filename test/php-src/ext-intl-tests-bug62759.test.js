// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug62759.phpt
  it("Bug #62759: Buggy grapheme_substr() on edge case", function () {
    expect(parser.parseCode("<?php\nvar_dump(substr('deja', 1, -4));\nvar_dump(substr('deja', -1, 0));\nvar_dump(grapheme_substr('deja', 1, -4));\nvar_dump(intl_get_error_message());\nvar_dump(grapheme_substr('deja', -1, 0));\nvar_dump(grapheme_substr('déjà', 1, -4));\nvar_dump(intl_get_error_message());\nvar_dump(grapheme_substr('déjà', -1, 0));\n?>")).toMatchSnapshot();
  });
});
