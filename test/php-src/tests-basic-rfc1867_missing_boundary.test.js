// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/rfc1867_missing_boundary.phpt
  it("rfc1867 missing boundary", function () {
    expect(parser.parseCode("<?php\nvar_dump($_FILES);\nvar_dump($_POST);\n?>")).toMatchSnapshot();
  });
});
