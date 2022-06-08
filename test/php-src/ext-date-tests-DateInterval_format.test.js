// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateInterval_format.phpt
  it("DateInterval::format(), except %a", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('UTC');\n$date1 = new DateTime('2000-01-01 00:00:00');\n$date2 = new DateTime('2001-03-04 04:05:06');\n$interval = $date1->diff($date2);\necho $interval->format('Y=%Y') . \"\\n\";\necho $interval->format('M=%M') . \"\\n\";\necho $interval->format('D=%D') . \"\\n\";\necho $interval->format('H=%H') . \"\\n\";\necho $interval->format('I=%I') . \"\\n\";\necho $interval->format('S=%S') . \"\\n\";\necho $interval->format('R=%R') . \"\\n\";\necho $interval->format('y=%y') . \"\\n\";\necho $interval->format('m=%m') . \"\\n\";\necho $interval->format('d=%d') . \"\\n\";\necho $interval->format('h=%h') . \"\\n\";\necho $interval->format('i=%i') . \"\\n\";\necho $interval->format('s=%s') . \"\\n\";\necho $interval->format('r=%r') . \"\\n\";\necho \"\\n\";\n$interval = $date2->diff($date1);\necho $interval->format('inverted R=%R') . \"\\n\";\necho $interval->format('inverted r=%r') . \"\\n\";\necho \"\\n\";\necho $interval->format('%=%%') . \"\\n\";\n// Invalid valid format character does not raise warnings.\necho $interval->format('x=%x') . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
