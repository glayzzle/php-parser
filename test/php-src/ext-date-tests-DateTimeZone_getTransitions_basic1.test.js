// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTimeZone_getTransitions_basic1.phpt
  it("Test DateTimeZone::getTransitions() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing DateTimeZone::getTransitions() : basic functionality ***\\n\";\n//Set the default time zone\ndate_default_timezone_set(\"Europe/London\");\n// Create a DateTimeZone object\n$tz = new DateTimeZone(\"Europe/London\");\n$tran = $tz->getTransitions(-306972000, -37241999);\nif (!is_array($tran)) {\n    echo \"TEST FAILED: Expected an array\\n\";\n}\necho \"\\n-- Total number of transitions: \" . count($tran). \" --\\n\";\necho \"\\n-- Format a sample entry for Spring 1963 --\\n\";\nvar_dump( $tran[6] );\n?>")).toMatchSnapshot();
  });
});
