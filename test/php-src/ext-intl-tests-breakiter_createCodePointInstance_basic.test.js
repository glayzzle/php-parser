// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/breakiter_createCodePointInstance_basic.phpt
  it("IntlBreakIterator::createCodePointInstance(): basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"pt_PT\");\n$text = 'ตัวอย่างข้อความ';\n$codepoint_it = IntlBreakIterator::createCodePointInstance();\nvar_dump(get_class($codepoint_it));\n$codepoint_it->setText($text);\nprint_r(iterator_to_array($codepoint_it));\n?>")).toMatchSnapshot();
  });
});
