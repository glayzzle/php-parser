// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTimeZone_getName_basic1.phpt
  it("Test DateTimeZone::getName() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing DateTimeZone::getName() : basic functionality ***\\n\";\n//Set the default time zone\ndate_default_timezone_set(\"GMT\");\n$tz1 = new DateTimeZone(\"Europe/London\");\nvar_dump( $tz1->getName() );\n$tz2 = new DateTimeZone(\"America/New_York\");\nvar_dump( $tz2->getName() );\n$tz3 = new DateTimeZone(\"America/Los_Angeles\");\nvar_dump( $tz3->getName() );\n?>")).toMatchSnapshot();
  });
});
