// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug52981.phpt
  it("Bug #52981 (Unicode properties are outdated (from Unicode 3.2))", function () {
    expect(parser.parseCode("<?php\nfunction test($str)\n{\n    $upper = mb_strtoupper($str, 'UTF-8');\n    $len = strlen($upper);\n    for ($i = 0; $i < $len; ++$i) echo dechex(ord($upper[$i])) . ' ';\n    echo \"\\n\";\n}\n// OK\ntest(\"\\xF0\\x90\\x90\\xB8\");// U+10438 DESERET SMALL LETTER H (added in 3.1.0, March 2001)\n// not OK\ntest(\"\\xE2\\xB0\\xB0\");\t// U+2C30 GLAGOLITIC SMALL LETTER AZU (added in 4.1.0, March 2005)\ntest(\"\\xD4\\xA5\");\t\t// U+0525 CYRILLIC SMALL LETTER PE WITH DESCENDER (added in 5.2.0, October 2009)\n?>")).toMatchSnapshot();
  });
});
