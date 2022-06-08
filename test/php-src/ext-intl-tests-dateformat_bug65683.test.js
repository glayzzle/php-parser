// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/dateformat_bug65683.phpt
  it("Bug #65683 IntlDateFormatter accepts DateTimeImmutable", function () {
    expect(parser.parseCode("<?php\n$formatter = new IntlDateFormatter('en-US', IntlDateFormatter::FULL, IntlDateFormatter::NONE, new DateTimeZone(\"UTC\"));\nvar_dump($formatter->format(new DateTimeImmutable('2017-03-27 00:00:00 UTC'))) . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
