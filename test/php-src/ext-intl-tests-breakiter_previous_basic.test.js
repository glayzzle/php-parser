// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/breakiter_previous_basic.phpt
  it("IntlBreakIterator::previous(): basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"pt_PT\");\n$bi = IntlBreakIterator::createWordInstance('pt');\n$bi->setText('foo bar trans');\nvar_dump($bi->last());\nvar_dump($bi->previous());\n?>")).toMatchSnapshot();
  });
});
