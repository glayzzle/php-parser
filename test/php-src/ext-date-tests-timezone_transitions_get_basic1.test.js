// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/timezone_transitions_get_basic1.phpt
  it("Test timezone_transitions_get() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing timezone_transitions_get() : basic functionality ***\\n\";\n//Set the default time zone\ndate_default_timezone_set(\"Europe/London\");\n// Create a DateTimeZone object\n$tz = timezone_open(\"Europe/London\");\n$tran = timezone_transitions_get($tz);\necho \"\\n-- Get all 60s transitions --\\n\";\n$tran = timezone_transitions_get($tz, -306972000, -37241999);\nvar_dump( gettype($tran) );\necho \"\\n-- Total number of transitions: \" . count($tran). \" --\\n\";\necho \"\\n-- Format a sample entry pfor Spring 1963 --\\n\";\nvar_dump( $tran[6] );\n?>")).toMatchSnapshot();
  });
});
