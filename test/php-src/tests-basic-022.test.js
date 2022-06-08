// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/022.phpt
  it("Cookies test#1", function () {
    expect(parser.parseCode("<?php\nvar_dump($_COOKIE);\n?>")).toMatchSnapshot();
  });
});
