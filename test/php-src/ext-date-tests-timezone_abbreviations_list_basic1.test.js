// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/timezone_abbreviations_list_basic1.phpt
  it("Test timezone_abbreviations_list() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing timezone_abbreviations_list() : basic functionality ***\\n\";\n//Set the default time zone\ndate_default_timezone_set(\"GMT\");\n$abbr = timezone_abbreviations_list();\nvar_dump( gettype($abbr) );\nvar_dump( count($abbr) );\necho \"\\n-- Format a sample entry --\\n\";\nvar_dump( $abbr[\"acst\"] );\n?>")).toMatchSnapshot();
  });
});
