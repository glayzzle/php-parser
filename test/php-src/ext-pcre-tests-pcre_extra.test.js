// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/pcre_extra.phpt
  it("X (PCRE_EXTRA) modifier is ignored (no error, no change)", function () {
    expect(parser.parseCode("<?php\nvar_dump(preg_match('/\\y/', '\\y'));\nvar_dump(preg_match('/\\y/X', '\\y'));\n?>")).toMatchSnapshot();
  });
});
