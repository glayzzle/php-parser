// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug71840.phpt
  it("Bug #71840 (Unserialize accepts wrongly data)", function () {
    expect(parser.parseCode("<?php\nvar_dump(unserialize('a:1:{s:0:\"\"0a:0:{}}'));\n?>")).toMatchSnapshot();
  });
});
