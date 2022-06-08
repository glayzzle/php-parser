// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug65213.phpt
  it("Bug #65213 (cannot cast SplFileInfo to boolean)", function () {
    expect(parser.parseCode("<?php\n$o = new SplFileInfo('.');\nvar_dump((bool) $o);\n?>")).toMatchSnapshot();
  });
});
