// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/url/bug53248.phpt
  it("Bug #53248 (rawurlencode RFC 3986 EBCDIC support)", function () {
    expect(parser.parseCode("<?php\nvar_dump(rawurlencode('A1_-.~'));\nvar_dump(rawurldecode('%41%31%5F%2D%2E%7E'));\n?>")).toMatchSnapshot();
  });
});
