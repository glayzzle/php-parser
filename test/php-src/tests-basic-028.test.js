// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/028.phpt
  it("RFC1867 character quoting", function () {
    expect(parser.parseCode("<?php\nvar_dump($_POST);\n?>")).toMatchSnapshot();
  });
});
