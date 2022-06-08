// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug45543.phpt
  it("Test for bug #45543: DateTime::setTimezone can not set timezones without ID.", function () {
    expect(parser.parseCode("<?php\n$test_dates = array(\n    '2008-01-01 12:00:00 PDT',\n    '2008-01-01 12:00:00 +02:00',\n);\nforeach ($test_dates as $test_date)\n{\n    $d1 = new DateTime($test_date);\n    $d2 = new DateTime('2008-01-01 12:00:00 UTC');\n    echo $d1->format(DATE_ISO8601), PHP_EOL;\n    echo $d2->format(DATE_ISO8601), PHP_EOL;\n    $tz = $d1->getTimeZone();\n    $d2->setTimeZone($tz);\n    echo $d1->format(DATE_ISO8601), PHP_EOL;\n    echo $d2->format(DATE_ISO8601), PHP_EOL;\n    echo PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
