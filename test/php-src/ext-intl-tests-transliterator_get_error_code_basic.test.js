// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/transliterator_get_error_code_basic.phpt
  it("Transliterator::getErrorCode (basic)", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n$t = Transliterator::create(\"[\\p{Bidi_Mirrored}] Hex\");\nvar_dump($t->transliterate(\"\\x8F\"));\necho transliterator_get_error_code($t), \"\\n\";\necho $t->getErrorCode(), \"\\n\";\nvar_dump($t->transliterate(\"\"));\necho $t->getErrorCode(), \"\\n\";\necho \"Done.\\n\";\n?>")).toMatchSnapshot();
  });
});
