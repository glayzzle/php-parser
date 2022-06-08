// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/breakiter_isBoundary_basic.phpt
  it("IntlBreakIterator::isBoundary(): basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"pt_PT\");\n$bi = IntlBreakIterator::createWordInstance('pt');\n$bi->setText('foo bar trans zoo bee');\nvar_dump($bi->isBoundary(0));\nvar_dump($bi->isBoundary(7));\nvar_dump($bi->isBoundary(-1));\nvar_dump($bi->isBoundary(1));\nvar_dump($bi->isBoundary(50));\n?>")).toMatchSnapshot();
  });
});
