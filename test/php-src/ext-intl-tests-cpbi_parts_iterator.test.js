// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/cpbi_parts_iterator.phpt
  it("IntlCodepointBreakIterator's part iterator", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"pt_PT\");\n$text = 'ตัวอย่างข้อความ';\n$it = IntlBreakIterator::createCodePointInstance()->getPartsIterator();\n$it->getBreakIterator()->setText($text);\nforeach ($it as $k => $v) {\n    echo \"$k. $v (\" . sprintf(\"U+%04X\", $it->getBreakIterator()->getLastCodePoint()) .\n        \") at {$it->getBreakIterator()->current()}\\r\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
