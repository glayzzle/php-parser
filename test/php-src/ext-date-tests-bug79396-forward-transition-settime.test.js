// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug79396-forward-transition-settime.phpt
  it("Test for setting Date/Time during a forward DST transition", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('America/Chicago');\n$date = new DateTime('2020-03-08 01:30:00');\necho $date->setTime(2, 0)->format('Y-m-d H:i:s T/e - U') . \"\\n\";\n$date = new DateTime('2020-03-08 01:30:00');\necho $date->setTime(2, 30)->format('Y-m-d H:i:s T/e - U') . \"\\n\";\n$date = new DateTime('2020-03-08 01:30:00');\necho $date->setTime(3, 0)->format('Y-m-d H:i:s T/e - U') . \"\\n\";\n$date = new DateTime('2020-03-08 01:30:00');\necho $date->setTime(1, 59, 59)->format('Y-m-d H:i:s T/e - U') . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
