// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/html_entity_decode_iso8859-15.phpt
  it("Translation of HTML entities for encoding ISO-8859-15", function () {
    expect(parser.parseCode("<?php\n$arr = array(\n0x00A0 => array(0xA0, \"NO-BREAK SPACE\"),\n0x00A1 => array(0xA1, \"INVERTED EXCLAMATION MARK\"),\n0x00A2 => array(0xA2, \"CENT SIGN\"),\n0x00A3 => array(0xA3, \"POUND SIGN\"),\n0x20AC => array(0xA4, \"EURO SIGN\"),\n0x00A5 => array(0xA5, \"YEN SIGN\"),\n0x0160 => array(0xA6, \"LATIN CAPITAL LETTER S WITH CARON\"),\n0x00A7 => array(0xA7, \"SECTION SIGN\"),\n0x0161 => array(0xA8, \"LATIN SMALL LETTER S WITH CARON\"),\n0x00A9 => array(0xA9, \"COPYRIGHT SIGN\"),\n0x00AA => array(0xAA, \"FEMININE ORDINAL INDICATOR\"),\n0x00AB => array(0xAB, \"LEFT-POINTING DOUBLE ANGLE QUOTATION MARK\"),\n0x00AC => array(0xAC, \"NOT SIGN\"),\n0x00AD => array(0xAD, \"SOFT HYPHEN\"),\n0x00AE => array(0xAE, \"REGISTERED SIGN\"),\n0x00AF => array(0xAF, \"MACRON\"),\n0x00B0 => array(0xB0, \"DEGREE SIGN\"),\n0x00B1 => array(0xB1, \"PLUS-MINUS SIGN\"),\n0x00B2 => array(0xB2, \"SUPERSCRIPT TWO\"),\n0x00B3 => array(0xB3, \"SUPERSCRIPT THREE\"),\n0x017D => array(0xB4, \"LATIN CAPITAL LETTER Z WITH CARON\"),\n0x00B5 => array(0xB5, \"MICRO SIGN\"),\n0x00B6 => array(0xB6, \"PILCROW SIGN\"),\n0x00B7 => array(0xB7, \"MIDDLE DOT\"),\n0x017E => array(0xB8, \"LATIN SMALL LETTER Z WITH CARON\"),\n0x00B9 => array(0xB9, \"SUPERSCRIPT ONE\"),\n0x00BA => array(0xBA, \"MASCULINE ORDINAL INDICATOR\"),\n0x00BB => array(0xBB, \"RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK\"),\n0x0152 => array(0xBC, \"LATIN CAPITAL LIGATURE OE\"),\n0x0153 => array(0xBD, \"LATIN SMALL LIGATURE OE\"),\n0x0178 => array(0xBE, \"LATIN CAPITAL LETTER Y WITH DIAERESIS\"),\n0x00BF => array(0xBF, \"INVERTED QUESTION MARK\"),\n0x00C0 => array(0xC0, \"LATIN CAPITAL LETTER A WITH GRAVE\"),\n0x00C1 => array(0xC1, \"LATIN CAPITAL LETTER A WITH ACUTE\"),\n0x00C2 => array(0xC2, \"LATIN CAPITAL LETTER A WITH CIRCUMFLEX\"),\n0x00C3 => array(0xC3, \"LATIN CAPITAL LETTER A WITH TILDE\"),\n0x00C4 => array(0xC4, \"LATIN CAPITAL LETTER A WITH DIAERESIS\"),\n0x00C5 => array(0xC5, \"LATIN CAPITAL LETTER A WITH RING ABOVE\"),\n0x00C6 => array(0xC6, \"LATIN CAPITAL LETTER AE\"),\n0x00C7 => array(0xC7, \"LATIN CAPITAL LETTER C WITH CEDILLA\"),\n0x00C8 => array(0xC8, \"LATIN CAPITAL LETTER E WITH GRAVE\"),\n0x00C9 => array(0xC9, \"LATIN CAPITAL LETTER E WITH ACUTE\"),\n0x00CA => array(0xCA, \"LATIN CAPITAL LETTER E WITH CIRCUMFLEX\"),\n0x00CB => array(0xCB, \"LATIN CAPITAL LETTER E WITH DIAERESIS\"),\n0x00CC => array(0xCC, \"LATIN CAPITAL LETTER I WITH GRAVE\"),\n0x00CD => array(0xCD, \"LATIN CAPITAL LETTER I WITH ACUTE\"),\n0x00CE => array(0xCE, \"LATIN CAPITAL LETTER I WITH CIRCUMFLEX\"),\n0x00CF => array(0xCF, \"LATIN CAPITAL LETTER I WITH DIAERESIS\"),\n0x00D0 => array(0xD0, \"LATIN CAPITAL LETTER ETH\"),\n0x00D1 => array(0xD1, \"LATIN CAPITAL LETTER N WITH TILDE\"),\n0x00D2 => array(0xD2, \"LATIN CAPITAL LETTER O WITH GRAVE\"),\n0x00D3 => array(0xD3, \"LATIN CAPITAL LETTER O WITH ACUTE\"),\n0x00D4 => array(0xD4, \"LATIN CAPITAL LETTER O WITH CIRCUMFLEX\"),\n0x00D5 => array(0xD5, \"LATIN CAPITAL LETTER O WITH TILDE\"),\n0x00D6 => array(0xD6, \"LATIN CAPITAL LETTER O WITH DIAERESIS\"),\n0x00D7 => array(0xD7, \"MULTIPLICATION SIGN\"),\n0x00D8 => array(0xD8, \"LATIN CAPITAL LETTER O WITH STROKE\"),\n0x00D9 => array(0xD9, \"LATIN CAPITAL LETTER U WITH GRAVE\"),\n0x00DA => array(0xDA, \"LATIN CAPITAL LETTER U WITH ACUTE\"),\n0x00DB => array(0xDB, \"LATIN CAPITAL LETTER U WITH CIRCUMFLEX\"),\n0x00DC => array(0xDC, \"LATIN CAPITAL LETTER U WITH DIAERESIS\"),\n0x00DD => array(0xDD, \"LATIN CAPITAL LETTER Y WITH ACUTE\"),\n0x00DE => array(0xDE, \"LATIN CAPITAL LETTER THORN\"),\n0x00DF => array(0xDF, \"LATIN SMALL LETTER SHARP S\"),\n0x00E0 => array(0xE0, \"LATIN SMALL LETTER A WITH GRAVE\"),\n0x00E1 => array(0xE1, \"LATIN SMALL LETTER A WITH ACUTE\"),\n0x00E2 => array(0xE2, \"LATIN SMALL LETTER A WITH CIRCUMFLEX\"),\n0x00E3 => array(0xE3, \"LATIN SMALL LETTER A WITH TILDE\"),\n0x00E4 => array(0xE4, \"LATIN SMALL LETTER A WITH DIAERESIS\"),\n0x00E5 => array(0xE5, \"LATIN SMALL LETTER A WITH RING ABOVE\"),\n0x00E6 => array(0xE6, \"LATIN SMALL LETTER AE\"),\n0x00E7 => array(0xE7, \"LATIN SMALL LETTER C WITH CEDILLA\"),\n0x00E8 => array(0xE8, \"LATIN SMALL LETTER E WITH GRAVE\"),\n0x00E9 => array(0xE9, \"LATIN SMALL LETTER E WITH ACUTE\"),\n0x00EA => array(0xEA, \"LATIN SMALL LETTER E WITH CIRCUMFLEX\"),\n0x00EB => array(0xEB, \"LATIN SMALL LETTER E WITH DIAERESIS\"),\n0x00EC => array(0xEC, \"LATIN SMALL LETTER I WITH GRAVE\"),\n0x00ED => array(0xED, \"LATIN SMALL LETTER I WITH ACUTE\"),\n0x00EE => array(0xEE, \"LATIN SMALL LETTER I WITH CIRCUMFLEX\"),\n0x00EF => array(0xEF, \"LATIN SMALL LETTER I WITH DIAERESIS\"),\n0x00F0 => array(0xF0, \"LATIN SMALL LETTER ETH\"),\n0x00F1 => array(0xF1, \"LATIN SMALL LETTER N WITH TILDE\"),\n0x00F2 => array(0xF2, \"LATIN SMALL LETTER O WITH GRAVE\"),\n0x00F3 => array(0xF3, \"LATIN SMALL LETTER O WITH ACUTE\"),\n0x00F4 => array(0xF4, \"LATIN SMALL LETTER O WITH CIRCUMFLEX\"),\n0x00F5 => array(0xF5, \"LATIN SMALL LETTER O WITH TILDE\"),\n0x00F6 => array(0xF6, \"LATIN SMALL LETTER O WITH DIAERESIS\"),\n0x00F7 => array(0xF7, \"DIVISION SIGN\"),\n0x00F8 => array(0xF8, \"LATIN SMALL LETTER O WITH STROKE\"),\n0x00F9 => array(0xF9, \"LATIN SMALL LETTER U WITH GRAVE\"),\n0x00FA => array(0xFA, \"LATIN SMALL LETTER U WITH ACUTE\"),\n0x00FB => array(0xFB, \"LATIN SMALL LETTER U WITH CIRCUMFLEX\"),\n0x00FC => array(0xFC, \"LATIN SMALL LETTER U WITH DIAERESIS\"),\n0x00FD => array(0xFD, \"LATIN SMALL LETTER Y WITH ACUTE\"),\n0x00FE => array(0xFE, \"LATIN SMALL LETTER THORN\"),\n0x00FF => array(0xFF, \"LATIN SMALL LETTER Y WITH DIAERESIS\"),\n);\nforeach ($arr as $u => $v) {\n    $ent = sprintf(\"&#x%X;\", $u);\n    $res = html_entity_decode($ent, ENT_QUOTES, 'ISO-8859-15');\n    $d = unpack(\"H*\", $res);\n    echo sprintf(\"%s: %s => %s\\n\", $v[1], $ent, $d[1]);\n    $ent = sprintf(\"&#x%X;\", $v[0]);\n    $res = html_entity_decode($ent, ENT_QUOTES, 'ISO-8859-15');\n    if ($res[0] != \"&\" || $res[1] != \"#\")\n        $res = unpack(\"H*\", $res)[1];\n    echo sprintf(\"%s => %s\\n\\n\", $ent, $res);\n}\n?>")).toMatchSnapshot();
  });
});
