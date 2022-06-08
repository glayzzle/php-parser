// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/transliterator_transliterate_basic.phpt
  it("Transliterator::transliterate (basic)", function () {
    expect(parser.parseCode("<?php\n$t = transliterator_create(\"Latin; Title\");\n$s = \"Κοντογιαννάτος, Βασίλης\";\necho $t->transliterate($s),\"\\n\";\necho transliterator_transliterate($t, $s),\"\\n\";\necho $t->transliterate($s, 3),\"\\n\";\necho $t->transliterate($s, 3, 4),\"\\n\";\necho \"Done.\\n\";\n?>")).toMatchSnapshot();
  });
});
