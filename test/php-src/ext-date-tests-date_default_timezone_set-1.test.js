// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_default_timezone_set-1.phpt
  it("date_default_timezone_set() function [1]", function () {
    expect(parser.parseCode("<?php\n    putenv(\"TZ=\");\n    $date1 = strtotime(\"2005-01-12 08:00:00\");\n    $date2 = strtotime(\"2005-07-12 08:00:00\");\n    date_default_timezone_set(\"America/Indiana/Knox\");\n    $date3 = strtotime(\"2005-01-12 08:00:00\");\n    $date4 = strtotime(\"2005-07-12 08:00:00\");\n    echo date_default_timezone_get(), \"\\n\";\n    echo date(DATE_ISO8601, $date1), \"\\n\";\n    echo date(DATE_ISO8601, $date2), \"\\n\";\n    echo date(DATE_ISO8601, $date3), \"\\n\";\n    echo date(DATE_ISO8601, $date4), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
