// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/bug78929.phpt
  it("Bug #78929 (plus signs in cookie values are converted to spaces)", function () {
    expect(parser.parseCode("<?php\nvar_dump($_COOKIE);\n?>")).toMatchSnapshot();
  });
});
