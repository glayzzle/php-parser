// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/breakiter_preceding_basic.phpt
  it("IntlBreakIterator::preceding(): basic test, ICU <= 57.1", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"pt_PT\");\n$bi = IntlBreakIterator::createWordInstance('pt');\n$bi->setText('foo bar trans zoo bee');\nvar_dump($bi->preceding(5));\nvar_dump($bi->preceding(50));\nvar_dump($bi->preceding(-1));\n?>")).toMatchSnapshot();
  });
});
