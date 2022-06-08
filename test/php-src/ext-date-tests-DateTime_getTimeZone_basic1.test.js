// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTime_getTimeZone_basic1.phpt
  it("Test DateTime::getTimezone() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing DateTime::getTimezone() : basic functionality ***\\n\";\ndate_default_timezone_set(\"Europe/London\");\n$object = new DateTime(\"2009-01-30 17:57:32\");\nvar_dump( $object->getTimeZone()->getName() );\ndate_default_timezone_set(\"America/New_York\");\n$object = new DateTime(\"2009-01-30 17:57:32\");\nvar_dump( $object->getTimeZone()->getName() );\n$la_time = new DateTimeZone(\"America/Los_Angeles\");\n$object->setTimeZone($la_time);\nvar_dump( $object->getTimeZone()->getName() );\n?>")).toMatchSnapshot();
  });
});
