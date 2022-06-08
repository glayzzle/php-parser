// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug70487.phpt
  it("Bug #70487: pack('x') produces an error", function () {
    expect(parser.parseCode("<?php\nvar_dump(pack('x') === \"\\0\");\n?>")).toMatchSnapshot();
  });
});
