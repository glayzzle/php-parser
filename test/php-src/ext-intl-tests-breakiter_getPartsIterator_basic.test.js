// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/breakiter_getPartsIterator_basic.phpt
  it("IntlBreakIterator::getPartsIterator(): basic test, ICU <= 57.1", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"pt_PT\");\n$bi = IntlBreakIterator::createWordInstance('pt');\n$pi = $bi->getPartsIterator();\nvar_dump(get_class($pi));\nprint_r(iterator_to_array($pi));\n$bi->setText(\"foo bar\");\n$pi = $bi->getPartsIterator();\nvar_dump(get_class($pi->getBreakIterator()));\nprint_r(iterator_to_array($pi));\nvar_dump($pi->getRuleStatus());\n?>")).toMatchSnapshot();
  });
});
