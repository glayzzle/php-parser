// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/forward-transition-construction.phpt
  it("Test for Date/Time construction during a forward DST transition", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('America/New_York');\n$date = new DateTime('2010-03-14 01:30:00');\necho $date->format('Y-m-d H:i:s T/e - U') . \"\\n\";\n$date = new DateTime('2010-03-14 02:00:00');\necho $date->format('Y-m-d H:i:s T/e - U') . \"\\n\";\n$date = new DateTime('2010-03-14 02:30:00');\necho $date->format('Y-m-d H:i:s T/e - U') . \"\\n\";\n$date = new DateTime('2010-03-14 03:00:00');\necho $date->format('Y-m-d H:i:s T/e - U') . \"\\n\";\n$date = new DateTime('2010-03-14 03:30:00');\necho $date->format('Y-m-d H:i:s T/e - U') . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
