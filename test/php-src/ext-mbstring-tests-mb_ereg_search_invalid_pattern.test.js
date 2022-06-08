// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_ereg_search_invalid_pattern.phpt
  it("mb_ereg_search() with invalid pattern should discard old matches", function () {
    expect(parser.parseCode("<?php\nmb_ereg_search_init('');\nvar_dump(mb_ereg_search(''));\nvar_dump(mb_ereg_search(\"\\xff\"));\nvar_dump(mb_ereg_search_getregs());\n?>")).toMatchSnapshot();
  });
});
