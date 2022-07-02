// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/023.phpt
  it("Cookies test#2", function () {
    expect(parser.parseCode("<?php\nvar_dump($_COOKIE);\n?>")).toMatchSnapshot();
  });
});
