// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/transliterator_create_inverse_basic.phpt
  it("Transliterator::createInverse (basic)", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n$tr = Transliterator::create(\"Katakana-Latin\");\n$orstr = \"オーシャンビュー\";\n$new_str = $tr->transliterate($orstr);\n$revtr = $tr->createInverse();\n$recovstr = $revtr->transliterate($new_str);\n$revtr2 = transliterator_create_inverse($tr);\n$recovstr2 = $revtr2->transliterate($new_str);\necho $orstr,\"\\n\";\necho $new_str,\"\\n\";\necho $recovstr,\"\\n\";\nvar_dump($orstr === $recovstr);\nvar_dump($orstr === $recovstr2);\necho \"Done.\\n\";\n?>")).toMatchSnapshot();
  });
});
