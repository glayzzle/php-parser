// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug42910.phpt
  it("Bug #42910 (Constructing DateTime with TimeZone Indicator invalidates DateTimeZone)", function () {
    expect(parser.parseCode("<?php\n    date_default_timezone_set('America/Los_Angeles');\n    $foo = new DateTime('2007-03-11');\n    $bar = new DateTime('2007-03-11T00:00:00-0800');\n    print $foo->format(DateTime::ISO8601) . ' - ' .  $foo->getTimezone()->getName() . ' - ' . $foo->format('U') . \"\\r\\n\";\n    print $bar->format(DateTime::ISO8601) . ' - ' .  $bar->getTimezone()->getName() . ' - ' . $bar->format('U') . \"\\r\\n\";\n    $foo->setDate(2007, 03, 12);\n    $bar->setDate(2007, 03, 12);\n    print $foo->format(DateTime::ISO8601) . ' - ' .  $foo->getTimezone()->getName() . ' - ' . $foo->format('U') . \"\\r\\n\";\n    print $bar->format(DateTime::ISO8601) . ' - ' .  $bar->getTimezone()->getName() . ' - ' . $bar->format('U') . \"\\r\\n\";\n// --------------\n    date_default_timezone_set('Australia/Sydney');\n    $date= date_create('2007-11-04 12:00:00+0200');\n    var_dump(date_format($date, 'O e'));\n?>")).toMatchSnapshot();
  });
});
