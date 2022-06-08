// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/timezone_name_from_abbr_basic1.phpt
  it("Test timezone_name_from_abbr() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing timezone_name_from_abbr() : basic functionality ***\\n\";\n//Set the default time zone\ndate_default_timezone_set(\"Europe/London\");\necho \"-- Tests with special cases first - no lookup needed --\\n\";\nvar_dump( timezone_name_from_abbr(\"GMT\") );\nvar_dump( timezone_name_from_abbr(\"UTC\") );\necho \"-- Lookup with just name --\\n\";\nvar_dump( timezone_name_from_abbr(\"CET\") );\nvar_dump( timezone_name_from_abbr(\"EDT\") );\necho \"-- Lookup with name and offset--\\n\";\nvar_dump( timezone_name_from_abbr(\"ADT\", -10800) );\nvar_dump( timezone_name_from_abbr(\"ADT\", 14400) );\necho \"-- Tests without valid name - uses gmtOffset and isdst to find match --\\n\";\nvar_dump( timezone_name_from_abbr(\"\", 3600, 1) );\nvar_dump( timezone_name_from_abbr(\"FOO\", -7200, 1) );\nvar_dump( timezone_name_from_abbr(\"\", -14400, 1) );\nvar_dump( timezone_name_from_abbr(\"\", -14400, 0) );\necho \"-- Tests with invalid offsets --\\n\";\nvar_dump( timezone_name_from_abbr(\"\", 5400) ); // offset = 1.5 hrs\nvar_dump( timezone_name_from_abbr(\"\", 62400) ); // offset = 24 hrs\n?>")).toMatchSnapshot();
  });
});
