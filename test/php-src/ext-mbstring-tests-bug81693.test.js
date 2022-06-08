// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug81693.phpt
  it("Bug #81693 (mb_check_encoding(7bit) segfaults)", function () {
    expect(parser.parseCode("<?php\nvar_dump(mb_check_encoding('Hello world', '7bit'));\n?>")).toMatchSnapshot();
  });
});
