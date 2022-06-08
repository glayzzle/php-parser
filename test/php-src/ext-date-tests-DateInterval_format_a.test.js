// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateInterval_format_a.phpt
  it("DateInterval::format(), %a", function () {
    expect(parser.parseCode("<?php\n$date1 = new DateTime('2000-01-01 00:00:00');\n$date2 = new DateTime('2001-03-04 04:05:06');\n$interval = $date1->diff($date2);\necho $interval->format('a=%a') . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
