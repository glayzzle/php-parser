// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/cpbi_clone_equality.phpt
  it("IntlCodePointBreakIterator: clone and equality", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"pt_PT\");\n$text = 'ตัวอย่างข้อความ';\n$text2 = 'foo';\n$it = IntlBreakIterator::createCodePointInstance();\n$it->setText($text);\n$it_clone = clone $it;\nvar_dump($it == $it_clone);\n$it->setText($text2 );\nvar_dump($it == $it_clone);\n$it_clone->setText($text2);\nvar_dump($it == $it_clone);\n?>")).toMatchSnapshot();
  });
});
