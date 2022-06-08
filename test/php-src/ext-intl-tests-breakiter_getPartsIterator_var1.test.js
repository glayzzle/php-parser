// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/breakiter_getPartsIterator_var1.phpt
  it("IntlBreakIterator::getPartsIterator(): argument variations", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"pt_PT\");\n$text = 'foo bar tao';\n$it = IntlBreakIterator::createWordInstance(NULL);\n$it->setText($text);\nvar_dump(iterator_to_array($it->getPartsIterator(IntlPartsIterator::KEY_SEQUENTIAL)));\nvar_dump(iterator_to_array($it->getPartsIterator(IntlPartsIterator::KEY_LEFT)));\nvar_dump(iterator_to_array($it->getPartsIterator(IntlPartsIterator::KEY_RIGHT)));\n?>")).toMatchSnapshot();
  });
});
