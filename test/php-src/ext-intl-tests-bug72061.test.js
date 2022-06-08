// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug72061.phpt
  it("Bug #72061: Out-of-bounds reads in zif_grapheme_stripos with negative offset", function () {
    expect(parser.parseCode("<?php\nvar_dump(grapheme_stripos(str_repeat(\"ABCD\", 16384), \"A\", -201));\nvar_dump(grapheme_strpos(str_repeat(\"ABCD\", 16384), \"A\", -201));\n?>\nDONE")).toMatchSnapshot();
  });
});
