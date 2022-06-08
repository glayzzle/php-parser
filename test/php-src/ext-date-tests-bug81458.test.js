// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug81458.phpt
  it("Test for bug #81458: Regression in PHP 8.1: Incorrect difference after timezone change", function () {
    expect(parser.parseCode("<?php\n$first = (new DateTime('2018-07-01 00:00:00.000000 America/Toronto'))->setTimezone(new DateTimeZone('UTC'));\n$second = new DateTime('2018-07-02 00:00:00.000000 America/Toronto');\nvar_dump($first->diff($second)->days);\nvar_dump($first->diff($second)->d);\ndate_default_timezone_set('UTC');\n$a = new DateTime('2018-12-01 00:00');\n$b = new DateTime('2018-12-02 00:01');\nvar_dump($a->diff($b)->days);\n?>")).toMatchSnapshot();
  });
});
