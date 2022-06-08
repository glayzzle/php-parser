// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug55253.phpt
  it("Bug #55253 (DateTime::add() and sub() result -1 hour on objects with time zone type 2)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('America/New_York');\n$interval = new DateInterval('PT2H1M');\n$date3 = new DateTime('2010-10-04 02:18:48');\n$date2 = new DateTime('2010-10-04 02:18:48 EDT');\necho 'Zone Type 3: ' . $date3->format('Y-m-d H:i:s T') . \"\\n\";\necho 'Zone Type 2: ' . $date2->format('Y-m-d H:i:s T') . \"\\n\";\necho $interval->format('Add %h hours %i minutes') . \"\\n\";\n$date3->add($interval);\n$date2->add($interval);\necho 'Zone Type 3: ' . $date3->format('Y-m-d H:i:s T') . \"\\n\";\necho 'Zone Type 2: ' . $date2->format('Y-m-d H:i:s T') . \"\\n\";\n// Try subtracting from expected result.\n$date3 = new DateTime('2010-10-04 04:19:48');\n$date2 = new DateTime('2010-10-04 04:19:48 EDT');\necho $interval->format('Subtract %h hours %i minutes from expected') . \"\\n\";\n$date3->sub($interval);\n$date2->sub($interval);\necho 'Zone Type 3: ' . $date3->format('Y-m-d H:i:s T') . \"\\n\";\necho 'Zone Type 2: ' . $date2->format('Y-m-d H:i:s T') . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
