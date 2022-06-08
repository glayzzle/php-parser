// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/breakiter_following_basic.phpt
  it("IntlBreakIterator::following(): basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"pt_PT\");\n$bi = IntlBreakIterator::createWordInstance('pt');\n$bi->setText('foo bar trans zoo bee');\nvar_dump($bi->following(5));\nvar_dump($bi->following(50));\nvar_dump($bi->following(-1));\n?>")).toMatchSnapshot();
  });
});
