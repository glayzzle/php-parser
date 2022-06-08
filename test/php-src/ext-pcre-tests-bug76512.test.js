// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug76512.phpt
  it("Bug #76512 (\\w no longer includes unicode characters)", function () {
    expect(parser.parseCode("<?php\nvar_dump(preg_match('/\\w/u', 'ä'));\n?>")).toMatchSnapshot();
  });
});
