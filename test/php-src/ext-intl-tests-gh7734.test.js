// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/gh7734.phpt
  it("GH-7734 (IntlPartsIterator key is wrong for KEY_LEFT/KEY_RIGHT)", function () {
    expect(parser.parseCode("<?php\n$iter = \\IntlBreakIterator::createCodePointInstance();\n$iter->setText('ABC');\nforeach ($iter->getPartsIterator(\\IntlPartsIterator::KEY_SEQUENTIAL) as $key => $value) {\n    var_dump($key, $value);\n}\nforeach ($iter->getPartsIterator(\\IntlPartsIterator::KEY_LEFT) as $key => $value) {\n    var_dump($key, $value);\n}\nforeach ($iter->getPartsIterator(\\IntlPartsIterator::KEY_RIGHT) as $key => $value) {\n    var_dump($key, $value);\n}\n?>")).toMatchSnapshot();
  });
});
