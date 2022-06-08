// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/breakiter_getLocale_basic3.phpt
  it("IntlBreakIterator::getLocale(): basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"pt_PT\");\n$bi = IntlBreakIterator::createSentenceInstance('pt');\nvar_dump($bi->getLocale(0));\nvar_dump($bi->getLocale(1));\n?>")).toMatchSnapshot();
  });
});
