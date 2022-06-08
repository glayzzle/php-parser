// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/nil_constant.phpt
  it("NIL constant is deprecated", function () {
    expect(parser.parseCode("<?php\nvar_dump(NIL);\n?>")).toMatchSnapshot();
  });
});
