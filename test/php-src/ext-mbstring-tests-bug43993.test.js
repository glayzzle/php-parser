// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug43993.phpt
  it("Bug #43993 (mb_substr_count() behaves differently to substr_count() with overlapping needles)", function () {
    expect(parser.parseCode("<?php\nvar_dump(mb_substr_count(\"abcabcabca\", \"abcabc\"));\nvar_dump(mb_substr_count(\"abcabcabca\", \"abc\"));\nvar_dump(mb_substr_count(\"abcabcabca\", \"cab\"));\nvar_dump(mb_substr_count(\"abcabcabca\", \"bca\"));\nvar_dump(mb_substr_count(\"ababababab\", \"ba\"));\nvar_dump(mb_substr_count(\"ababababab\", \"ab\"));\nvar_dump(mb_substr_count(\"ababababab\", \"bc\"));\nvar_dump(mb_substr_count(\"aaaaaaaaaa\", \"a\"));\nvar_dump(mb_substr_count(\"aaaaaaaaaa\", \"b\"));\n?>")).toMatchSnapshot();
  });
});
