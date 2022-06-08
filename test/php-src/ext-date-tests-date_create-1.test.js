// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_create-1.phpt
  it("date_create() function [1]", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('Europe/Oslo');\n$tz1 = timezone_open(\"GMT\");\n$tz2 = timezone_open(\"Europe/London\");\n$tz3 = timezone_open(\"America/Los_Angeles\");\n$d = array();\n$d[] = date_create(\"2005-07-14 22:30:41\");\n$d[] = date_create(\"2005-07-14 22:30:41 GMT\");\n$d[] = date_create(\"2005-07-14 22:30:41 CET\");\n$d[] = date_create(\"2005-07-14 22:30:41 CEST\");\n$d[] = date_create(\"2005-07-14 22:30:41 Europe/Oslo\");\n$d[] = date_create(\"2005-07-14 22:30:41 America/Los_Angeles\");\n$d[] = date_create(\"2005-07-14 22:30:41\", $tz1);\n$d[] = date_create(\"2005-07-14 22:30:41\", $tz2);\n$d[] = date_create(\"2005-07-14 22:30:41\", $tz3);\n$d[] = date_create(\"2005-07-14 22:30:41 GMT\", $tz1);\n$d[] = date_create(\"2005-07-14 22:30:41 GMT\", $tz2);\n$d[] = date_create(\"2005-07-14 22:30:41 GMT\", $tz3);\n$d[] = date_create(\"2005-07-14 22:30:41 Europe/Oslo\", $tz1);\n$d[] = date_create(\"2005-07-14 22:30:41 America/Los_Angeles\", $tz2);\nforeach($d as $date) {\n    echo $date->format(DateTime::ISO8601), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
