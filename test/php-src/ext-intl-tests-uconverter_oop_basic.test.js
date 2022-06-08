// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/uconverter_oop_basic.phpt
  it("Basic UConverter::convert() usage", function () {
    expect(parser.parseCode("<?php\n$c = new UConverter('utf-8', 'latin1');\nvar_dump($c->convert(\"This is an ascii string\"));\n// urlencode so that non-ascii shows up parsable in phpt file\nvar_dump(urlencode($c->convert(\"Espa\\xF1ol\"))); // U+00F1 LATIN SMALL LETTER N WITH TILDE\nvar_dump(urlencode($c->convert(\"Stra\\xDFa\")));  // U+00DF LATIN SMALL LETTER SHARP S\nvar_dump(urlencode($c->convert(\"Stra\\xC3\\x9Fa\", true))); // Reverse prior op\n$k = new UConverter('utf-8', 'koi8-r');\nvar_dump(bin2hex($k->convert(\"\\xE4\"))); // U+0414 CYRILLIC CAPITAL LETTER DE\n?>")).toMatchSnapshot();
  });
});
