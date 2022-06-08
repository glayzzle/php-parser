// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug76556.phpt
  it("Bug #76556 (get_debug_info handler for BreakIterator shows wrong type)", function () {
    expect(parser.parseCode("<?php\n$it = IntlBreakIterator::createCharacterInstance();\n$it->setText('foo');\nvar_dump($it);\n?>")).toMatchSnapshot();
  });
});
