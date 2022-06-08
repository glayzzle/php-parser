// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug72694.phpt
  it("Bug #72694 (mb_ereg_search_setpos does not accept a string's last position)", function () {
    expect(parser.parseCode("<?php\nmb_ereg_search_init('foo');\nvar_dump(mb_ereg_search_setpos(3));\nvar_dump(mb_ereg_search_getpos());\nvar_dump(mb_ereg_search('\\Z'));\nvar_dump(mb_ereg_search_getpos());\n?>")).toMatchSnapshot();
  });
});
