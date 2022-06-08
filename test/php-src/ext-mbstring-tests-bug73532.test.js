// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug73532.phpt
  it("Bug #73532 (Null pointer dereference in mb_eregi)", function () {
    expect(parser.parseCode("<?php\nvar_dump(mb_eregi(\"a\", \"\\xf5\"));\n?>")).toMatchSnapshot();
  });
});
