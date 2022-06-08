// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug75075.phpt
  it("Bug #75075 (unpack with X* causes infinity loop)", function () {
    expect(parser.parseCode("<?php\nvar_dump(unpack(\"X*\", \"\"));\n?>")).toMatchSnapshot();
  });
});
