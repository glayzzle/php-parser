// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/030.phpt
  it("Bug#55504 (Content-Type header is not parsed correctly on HTTP POST request)", function () {
    expect(parser.parseCode("<?php\nvar_dump($_POST);\n?>")).toMatchSnapshot();
  });
});
