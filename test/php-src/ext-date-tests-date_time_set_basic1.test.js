// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_time_set_basic1.phpt
  it("Test date_time_set() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n //Set the default time zone\ndate_default_timezone_set(\"Europe/London\");\necho \"*** Testing date_time_set() : basic functionality ***\\n\";\n// Create a DateTime object\n$datetime = date_create(\"2009-01-31 15:14:10\");\necho \"Initial date: \" . date_format($datetime, DATE_RFC2822) . \"\\n\";\ndate_time_set($datetime, 17, 20);\necho \"After modification1 \" . date_format($datetime, DATE_RFC2822) . \"\\n\";\ndate_time_set($datetime, 19, 05, 59);\necho \"After modification2 \" . date_format($datetime, DATE_RFC2822) . \"\\n\";\ndate_time_set($datetime, 24, 10);\necho \"After modification3 \" . date_format($datetime, DATE_RFC2822) . \"\\n\";\ndate_time_set($datetime, 47, 35, 47);\necho \"After modification4 \" . date_format($datetime, DATE_RFC2822) . \"\\n\";\ndate_time_set($datetime, 54, 25);\necho \"After modification5 \" . date_format($datetime, DATE_RFC2822) . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
