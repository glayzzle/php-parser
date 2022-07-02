// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug73172.phpt
  it("Bug #73172 parse error: Invalid numeric literal", function () {
    expect(parser.parseCode("<?php\nsetlocale(LC_ALL, 'fr_FR.utf8', 'fra');\ninclude __DIR__ . DIRECTORY_SEPARATOR . \"bug73172.inc\";\n?>\n==DONE==")).toMatchSnapshot();
  });
});
