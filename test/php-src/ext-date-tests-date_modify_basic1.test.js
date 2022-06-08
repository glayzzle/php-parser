// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_modify_basic1.phpt
  it("Test date_modify() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n //Set the default time zone\ndate_default_timezone_set(\"Europe/London\");\necho \"*** Testing date_modify() : basic functionality ***\\n\";\n// Create a date object to modify\n$datetime = date_create(\"2009-01-31 14:28:41\");\ndate_modify($datetime, \"+1 day\");\necho \"After modification 1: \" . date_format($datetime, \"D, d M Y\") . \"\\n\";\ndate_modify($datetime, \"+1 week 2 days 4 hours 2 seconds\");\necho \"After modification 2: \" . date_format($datetime, \"D, d M Y H:i:s\") . \"\\n\";\ndate_modify($datetime, \"next Thursday\");\necho \"After modification 3: \" . date_format($datetime, \"D, d M Y\") . \"\\n\";\ndate_modify($datetime, \"last Sunday\");\necho \"After modification 4: \" . date_format($datetime, \"D, d M Y\") . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
