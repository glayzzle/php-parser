// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/dateformat_calendars_variant3.phpt
  it("IntlDateFormatter, calendars and time zone", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n$fmt1 = new IntlDateFormatter('en_US',\n    IntlDateFormatter::FULL,\n    IntlDateFormatter::FULL,\n    'GMT+05:12',\n    IntlDateFormatter::TRADITIONAL);\n$fmt2 = new IntlDateFormatter('en_US',\n    IntlDateFormatter::FULL,\n    IntlDateFormatter::FULL,\n    'GMT+05:12',\n    IntlDateFormatter::GREGORIAN);\n$fmt3 = new IntlDateFormatter('en_US@calendar=hebrew',\n    IntlDateFormatter::FULL,\n    IntlDateFormatter::FULL,\n    'GMT+05:12',\n    IntlDateFormatter::TRADITIONAL);\nvar_dump($fmt1->format(strtotime('2012-01-01 00:00:00 +0000')));\nvar_dump($fmt2->format(strtotime('2012-01-01 00:00:00 +0000')));\nvar_dump($fmt3->format(strtotime('2012-01-01 00:00:00 +0000')));\nnew IntlDateFormatter('en_US@calendar=hebrew',\n    IntlDateFormatter::FULL,\n    IntlDateFormatter::FULL,\n    'GMT+05:12',\n    -1);\n?>\n==DONE==")).toMatchSnapshot();
  });
});
