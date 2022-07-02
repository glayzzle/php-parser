// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/htmlentities25.phpt
  it("htmlentities() should not be influenced by mb_internal_encoding()", function () {
    expect(parser.parseCode("<?php\nvar_dump(htmlentities('äöü'));\n?>")).toMatchSnapshot();
  });
});
