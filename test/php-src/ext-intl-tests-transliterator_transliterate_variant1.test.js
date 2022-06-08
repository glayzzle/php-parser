// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/transliterator_transliterate_variant1.phpt
  it("transliterator_transliterate (variant 1, non-transliterator 1st arg)", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n//exec('pause');\n$str = \" o\";\necho transliterator_transliterate(\"[\\p{White_Space}] hex\", $str), \"\\n\";\necho transliterator_transliterate(\"\\x8F\", $str), \"\\n\";\necho intl_get_error_message(), \"\\n\";\nclass A {\nfunction __toString() { return \"inexistent id\"; }\n}\necho transliterator_transliterate(new A(), $str), \"\\n\";\necho intl_get_error_message(), \"\\n\";\necho \"Done.\\n\";\n?>")).toMatchSnapshot();
  });
});
