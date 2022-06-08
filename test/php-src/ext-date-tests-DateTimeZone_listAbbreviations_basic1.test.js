// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTimeZone_listAbbreviations_basic1.phpt
  it("Test DateTimeZone::listAbbreviations() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing DateTimeZone::listAbbreviations() : basic functionality ***\\n\";\n//Set the default time zone\ndate_default_timezone_set(\"GMT\");\n$abbr = DateTimeZone::listAbbreviations();\nvar_dump( gettype($abbr) );\nvar_dump( count($abbr) );\necho \"\\n-- Format a sample entry --\\n\";\nvar_dump( $abbr[\"acst\"] );\n?>")).toMatchSnapshot();
  });
});
