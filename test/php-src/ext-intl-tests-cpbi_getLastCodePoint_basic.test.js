// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/cpbi_getLastCodePoint_basic.phpt
  it("IntlCodepointBreakIterator::getLastCodePoint(): basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"pt_PT\");\n$text = 'ตัวอย่างข้อความ';\n$codepoint_it = IntlBreakIterator::createCodePointInstance();\n$codepoint_it->setText($text);\nvar_dump($codepoint_it->getLastCodePoint());\n//first() and last() don't read codepoint and set the last code point var to -1\n//The pointer is after the last read codepoint if moving forward and\n//before the last read codepoint is moving backwards\n$p = $codepoint_it->first();\nwhile ($p != IntlBreakIterator::DONE) {\n    $c = $codepoint_it->getLastCodePoint();\n    if ($c > 0)\n        var_dump(sprintf('U+%04X', $codepoint_it->getLastCodePoint()));\n    else\n        var_dump($c);\n    //it's a post-increment operation as to the codepoint, i.e., it gives the codepoint\n    //starting at the initial position and only then moves the pointer forward\n    $p = $codepoint_it->next();\n}\necho \"Now backwards\\n\";\n$p = $codepoint_it->last();\nwhile ($p != IntlBreakIterator::DONE) {\n    $c = $codepoint_it->getLastCodePoint();\n    if ($c > 0)\n        var_dump(sprintf('U+%04X', $codepoint_it->getLastCodePoint()));\n    else\n        var_dump($c);\n    $p = $codepoint_it->previous();\n}\n?>")).toMatchSnapshot();
  });
});
