// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug81019.phpt
  it("Bug #81019: Unable to clone NumberFormatter after failed parse()", function () {
    expect(parser.parseCode("<?php\n$fmt = new NumberFormatter('en_US', NumberFormatter::DECIMAL);\n$fmt->parse('abc');\n$fmt2 = clone $fmt;\n$datefmt = new IntlDateFormatter('en_US', IntlDateFormatter::FULL, IntlDateFormatter::FULL);\n$datefmt->parse('abc');\n$datefmt2 = clone $datefmt;\n$msgfmt = new MessageFormatter('en_US', '{0,number,integer}');\n$msgfmt->parse('abc');\n$msgfmt2 = clone $msgfmt;\n?>\n===DONE===")).toMatchSnapshot();
  });
});
