// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTime_construct-dst-overlap.phpt
  it("DateTime::__construct() -- fall daylight/standard overlap", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('America/New_York');\n// PHP defaults to Daylight Saving Time.  Ensure consistency in future.\n$d = new DateTime('2011-11-06 01:30:00');\necho $d->format('P') . \"\\n\";\ndate_default_timezone_set('Atlantic/Azores');\n// PHP defaults to Daylight Saving Time.  Ensure consistency in future.\n$d = new DateTime('2011-10-30 00:30:00');\necho $d->format('P') . \"\\n\";\ndate_default_timezone_set('Europe/London');\n// PHP defaults to normal time.  Ensure consistency in future.\n$d = new DateTime('2011-10-30 01:30:00');\necho $d->format('P') . \"\\n\";\ndate_default_timezone_set('Europe/Amsterdam');\n// PHP defaults to normal time.  Ensure consistency in future.\n$d = new DateTime('2011-10-30 02:30:00');\necho $d->format('P') . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
