// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/breakiter_getText_basic.phpt
  it("IntlBreakIterator::getText(): basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n$bi = IntlBreakIterator::createWordInstance('pt');\nvar_dump($bi->getText());\n$bi->setText('foo bar');\nvar_dump($bi->getText());\n?>")).toMatchSnapshot();
  });
});
