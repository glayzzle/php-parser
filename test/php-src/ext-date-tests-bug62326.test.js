// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug62326.phpt
  it("Bug #62326 (date_diff() function returns false result)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set(\"Europe/Berlin\");\n$start_timestamp    = date_create('2012-06-01');\n$end_timestamp      = date_create('2012-12-01');\n$difference = date_diff($start_timestamp, $end_timestamp);\necho $difference->format('%mM / %dD %hH %iM'), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
