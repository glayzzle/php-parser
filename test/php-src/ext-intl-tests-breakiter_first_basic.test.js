// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/breakiter_first_basic.phpt
  it("IntlBreakIterator::first(): basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n$bi = IntlBreakIterator::createWordInstance('pt');\n$bi->setText('foo bar trans');\nvar_dump($bi->current());\nvar_dump($bi->next());\nvar_dump($bi->first());\nvar_dump($bi->current());\n?>")).toMatchSnapshot();
  });
});
