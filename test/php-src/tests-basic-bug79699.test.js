// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/bug79699.phpt
  it("Cookies Security Bug", function () {
    expect(parser.parseCode("<?php\nvar_dump($_COOKIE);\n?>")).toMatchSnapshot();
  });
});
