// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug73646.phpt
  it("Bug #73646 (mb_ereg_search_init null pointer dereference)", function () {
    expect(parser.parseCode("<?php\nvar_dump(mb_ereg_search_init(NULL));\n?>")).toMatchSnapshot();
  });
});
