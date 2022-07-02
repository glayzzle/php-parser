// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/htmlentities03.phpt
  it("htmlentities() test 3 (setlocale / de_DE.ISO-8859-1)", function () {
    expect(parser.parseCode("<?php\n// Locale-based encoding guessing no longer works.\nsetlocale( LC_CTYPE, \"de_DE.ISO-8859-1\", \"de_DE.ISO8859-1\");\nvar_dump(htmlentities(\"\\xe4\\xf6\\xfc\", ENT_QUOTES));\n?>")).toMatchSnapshot();
  });
});
