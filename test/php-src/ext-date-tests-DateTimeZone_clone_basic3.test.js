// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTimeZone_clone_basic3.phpt
  it("Test clone of DateTimeZOne objects", function () {
    expect(parser.parseCode("<?php\n//Set the default time zone\ndate_default_timezone_set(\"Europe/London\");\necho \"*** Testing clone on DateTime objects ***\\n\";\necho \"\\n-- Create a DateTimeZone object --\\n\";\n$d1 = new DateTimeZone(\"Europe/London\");\nvar_dump($d1);\necho \"\\n-- Add some properties --\\n\";\n$d1->property1 = 99;\n$d1->property2 = \"Hello\";\nvar_dump($d1);\necho \"\\n-- clone it --\\n\";\n$d1_clone = clone $d1;\nvar_dump($d1_clone);\necho \"\\n-- Add some more properties --\\n\";\n$d1_clone->property3 = true;\n$d1_clone->property4 = 10.5;\nvar_dump($d1_clone);\necho \"\\n-- clone it --\\n\";\n$d2_clone = clone $d1_clone;\nvar_dump($d2_clone);\n?>")).toMatchSnapshot();
  });
});
