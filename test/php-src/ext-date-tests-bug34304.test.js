// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug34304.phpt
  it("Bug #34304 (date('w') returns wrong number for sunday, 'N' modifier is missing)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set(\"UTC\");\necho date('o\\-\\WW\\-N', strtotime('2 January 2005')), \"\\n\";\necho date('o\\-\\WW\\-N', strtotime('9 January 2005')), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
