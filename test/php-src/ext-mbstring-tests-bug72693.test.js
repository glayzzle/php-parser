// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug72693.phpt
  it("Bug #72693 (mb_ereg_search increments search position when a match zero-width)", function () {
    expect(parser.parseCode("<?php\nmb_ereg_search_init('foo');\nvar_dump(mb_ereg_search('\\A'));\nvar_dump(mb_ereg_search_getpos());\nvar_dump(mb_ereg_search('\\s*'));\nvar_dump(mb_ereg_search_getpos());\nvar_dump(mb_ereg_search('\\w+'));\nvar_dump(mb_ereg_search_getpos());\nvar_dump(mb_ereg_search_getregs());\nvar_dump(mb_ereg_search('\\s*'));\nvar_dump(mb_ereg_search_getpos());\nvar_dump(mb_ereg_search('\\Z'));\nvar_dump(mb_ereg_search_getpos());\n?>")).toMatchSnapshot();
  });
});
