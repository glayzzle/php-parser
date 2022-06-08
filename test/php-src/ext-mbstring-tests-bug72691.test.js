// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug72691.phpt
  it("Bug #72691 (mb_ereg_search raises a warning if a match zero-width)", function () {
    expect(parser.parseCode("<?php\n$str = 'foo';\nmb_ereg_search_init($str);\nmb_ereg_search('\\A');\nvar_dump(mb_ereg_search_getpos());\nvar_dump(mb_ereg_search_getregs());\nmb_ereg_search('\\s*');\nvar_dump(mb_ereg_search_getpos());\nvar_dump(mb_ereg_search_getregs());\nmb_ereg_search('\\w+');\nvar_dump(mb_ereg_search_getpos());\nvar_dump(mb_ereg_search_getregs());\nmb_ereg_search('\\Z');\nvar_dump(mb_ereg_search_getpos());\nvar_dump(mb_ereg_search_getregs());\n?>")).toMatchSnapshot();
  });
});
