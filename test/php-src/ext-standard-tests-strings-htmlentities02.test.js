// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/htmlentities02.phpt
  it("htmlentities() test 2 (setlocale / fr_FR.ISO-8859-15)", function () {
    expect(parser.parseCode("<?php\n// Locale-based encoding guessing no longer works.\nsetlocale(LC_CTYPE, \"fr_FR.ISO-8859-15\", \"fr_FR.ISO8859-15\", 'fr_FR@euro');\nvar_dump(htmlentities(\"\\xbc\\xbd\\xbe\", ENT_QUOTES, ''));\n?>")).toMatchSnapshot();
  });
});
