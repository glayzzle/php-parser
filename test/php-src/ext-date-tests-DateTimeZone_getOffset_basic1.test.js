// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTimeZone_getOffset_basic1.phpt
  it("Test DateTimeZone::getOffset() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing DateTimeZone::getOffset() : basic functionality ***\\n\";\n//Set the default time zone\ndate_default_timezone_set(\"GMT\");\n$tz1 = new DateTimeZone(\"Europe/London\");\n$date = new DateTime(\"GMT\");\nvar_dump( $tz1->getOffset($date) );\n$tz2 = new DateTimeZone(\"America/New_York\");\nvar_dump( $tz2->getOffset($date) );\n$tz3 = new DateTimeZone(\"America/Los_Angeles\");\nvar_dump( $tz3->getOffset($date) );\n?>")).toMatchSnapshot();
  });
});
