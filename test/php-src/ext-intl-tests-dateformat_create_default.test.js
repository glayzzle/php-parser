// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/dateformat_create_default.phpt
  it("IntlDateFormatter::create() with default date and time types", function () {
    expect(parser.parseCode("<?php\n$ts = strtotime('2012-01-01 00:00:00 UTC');\n$fmt = IntlDateFormatter::create('en_US');\necho $fmt->format($ts), \"\\n\";\n$fmt = new IntlDateFormatter('en_US');\necho $fmt->format($ts), \"\\n\";\n$fmt = datefmt_create('en_US');\necho $fmt->format($ts), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
