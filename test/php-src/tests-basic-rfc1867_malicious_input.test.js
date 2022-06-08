// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/rfc1867_malicious_input.phpt
  it("rfc1867 malicious input", function () {
    expect(parser.parseCode("<?php\nvar_dump($_FILES);\nvar_dump($_POST);\n?>")).toMatchSnapshot();
  });
});
