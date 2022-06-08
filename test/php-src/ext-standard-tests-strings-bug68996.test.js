// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug68996.phpt
  it("Bug #68996 (Invalid free of CG(interned_empty_string))", function () {
    expect(parser.parseCode("<?php\nfopen(\"\\xfc\\x63\", \"r\");\n?>")).toMatchSnapshot();
  });
});
