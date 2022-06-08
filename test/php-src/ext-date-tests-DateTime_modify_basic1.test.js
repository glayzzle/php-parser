// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTime_modify_basic1.phpt
  it("Test DateTime::modify() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n //Set the default time zone\ndate_default_timezone_set(\"Europe/London\");\necho \"*** Testing DateTime::modify() : basic functionality ***\\n\";\n// Create a date object to modify\n$datetime = new DateTime(\"2009-01-31 14:28:41\");\n$datetime->modify(\"+1 day\");\necho \"After modification 1: \" . $datetime->format(\"D, d M Y\") . \"\\n\";\n$datetime->modify(\"+1 week 2 days 4 hours 2 seconds\");\necho \"After modification 2: \" . $datetime->format(\"D, d M Y H:i:s\") . \"\\n\";\n$datetime->modify(\"next Thursday\");\necho \"After modification 3: \" . $datetime->format(\"D, d M Y\") . \"\\n\";\n$datetime->modify(\"last Sunday\");\necho \"After modification 4: \" . $datetime->format(\"D, d M Y\") . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
