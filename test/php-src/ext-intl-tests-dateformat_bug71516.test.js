// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/dateformat_bug71516.phpt
  it("Bug #71516 IntlDateFormatter losts locale if pattern is set via constructor", function () {
    expect(parser.parseCode("<?php\n$loc = \"ru_RU\";\n$goodFormatter = new IntlDateFormatter($loc, IntlDateFormatter::FULL, IntlDateFormatter::FULL, new DateTimeZone(\"UTC\"));\n$badFormatter  = new IntlDateFormatter($loc, IntlDateFormatter::FULL, IntlDateFormatter::FULL, new DateTimeZone(\"UTC\"), null, \"d MMM\");\n$badFormatter2 = new IntlDateFormatter($loc, IntlDateFormatter::FULL, IntlDateFormatter::FULL, new DateTimeZone(\"UTC\"));\n$badFormatter2->setPattern(\"d MMM\");\necho \"Formatter without pattern: \" . $goodFormatter->getLocale() . PHP_EOL;\necho \"Formatter with pattern: \" . $badFormatter->getLocale() . PHP_EOL;\necho \"Formatter with pattern set later: \" . $badFormatter2->getLocale() . PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
