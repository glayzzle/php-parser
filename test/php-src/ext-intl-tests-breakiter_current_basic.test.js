// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/breakiter_current_basic.phpt
  it("IntlBreakIterator::current(): basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"pt_PT\");\n$bi = IntlBreakIterator::createWordInstance('pt');\nvar_dump($bi->current());\n$bi->setText('foo bar trans zoo bee');\nvar_dump($bi->first());\nvar_dump($bi->current());\nvar_dump($bi->next());\nvar_dump($bi->current());\n?>")).toMatchSnapshot();
  });
});
