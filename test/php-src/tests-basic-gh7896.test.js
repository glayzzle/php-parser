// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/gh7896.phpt
  it("GH-7896 (Environment vars may be mangled on Windows)", function () {
    expect(parser.parseCode("<?php\nvar_dump(\n    $_SERVER['FÖÖ'],\n    $_ENV['FÖÖ'],\n    getenv('FÖÖ')\n);\n?>")).toMatchSnapshot();
  });
});
