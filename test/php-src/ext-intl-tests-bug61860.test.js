// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug61860.phpt
  it("Bug #61860: Offsets may be wrong for grapheme_stri* functions", function () {
    expect(parser.parseCode("<?php\n$haystack = 'Auf der Straße nach Paris habe ich mit dem Fahrer gesprochen';\nvar_dump(\n    grapheme_stripos($haystack, 'pariS '),\n    grapheme_stristr($haystack, 'paRis '),\n    grapheme_substr($haystack, grapheme_stripos($haystack, 'Paris'))\n);\n?>")).toMatchSnapshot();
  });
});
