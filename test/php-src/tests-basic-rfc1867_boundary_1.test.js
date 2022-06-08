// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/rfc1867_boundary_1.phpt
  it("rfc1867 boundary 1", function () {
    expect(parser.parseCode("<?php\nvar_dump($_FILES);\nvar_dump($_POST);\n?>")).toMatchSnapshot();
  });
});
