// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/breakiter_setText_basic.phpt
  it("IntlBreakIterator::setText(): basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nclass A {\nfunction __tostring() { return 'aaa'; }\n}\n$bi = IntlBreakIterator::createWordInstance('pt');\nvar_dump($bi->setText('foo bar'));\nvar_dump($bi->getText());\nvar_dump($bi->setText(1));\nvar_dump($bi->getText());\nvar_dump($bi->setText(new A));\nvar_dump($bi->getText());\n/* setText resets the pointer */\nvar_dump($bi->next());\nvar_dump($bi->setText('foo bar'));\nvar_dump($bi->current());\n?>")).toMatchSnapshot();
  });
});
