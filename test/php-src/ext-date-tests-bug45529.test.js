// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug45529.phpt
  it("Bug #45529 (UTC not properly recognised as timezone identifier while parsing)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('Europe/Oslo');\n$tz1 = new DateTimeZone('UTC');\n$tz2 = date_create('UTC')->getTimeZone();\necho $tz1->getName(), PHP_EOL;\necho $tz2->getName(), PHP_EOL;\n$d = new DateTime('2008-01-01 12:00:00+0200');\n$d->setTimeZone($tz1);\necho $d->format(DATE_ISO8601), PHP_EOL;\n$d = new DateTime('2008-01-01 12:00:00+0200');\n$d->setTimeZone($tz2);\necho $d->format(DATE_ISO8601), PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
