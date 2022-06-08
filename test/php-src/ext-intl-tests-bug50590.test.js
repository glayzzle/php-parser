// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug50590.phpt
  it("Bug #50590 (IntlDateFormatter::parse result is limited to the integer range)", function () {
    expect(parser.parseCode("<?php\n$fmt = new IntlDateFormatter(\"en_US\", IntlDateFormatter::FULL, IntlDateFormatter::FULL);\nvar_dump($fmt->parse(\"Wednesday, January 20, 2038 3:14:07 AM GMT\"));\n?>")).toMatchSnapshot();
  });
});
