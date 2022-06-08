// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/rfc1867_garbled_mime_headers.phpt
  it("rfc1867 garbled mime headers", function () {
    expect(parser.parseCode("<?php\nvar_dump($_FILES);\nvar_dump($_POST);\n?>")).toMatchSnapshot();
  });
});
