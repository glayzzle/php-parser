// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/transliterator_clone.phpt
  it("Transliterator clone handler", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n$str = \"a U+4E07\";\n$t = Transliterator::create(\"hex-any\");\necho $t->id, \": \", $t->transliterate($str), \"\\n\";\n$u = clone $t;\necho $u->id, \": \", $u->transliterate($str), \"\\n\";\necho \"Done.\\n\";\n?>")).toMatchSnapshot();
  });
});
