// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/gmdate_variation7.phpt
  it("Test gmdate() function : usage variation - Passing Year format options to format argument.", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing gmdate() : usage variation ***\\n\";\n// Initialise all required variables\ndate_default_timezone_set('UTC');\n$timestamp = mktime(8, 8, 8, 8, 8, 2008);\n$timestamp_non_leap_year = mktime(8, 8, 8, 8, 8, 2007);\necho \"\\n-- Testing gmdate() function with checking non leap year using Leap Year format --\\n\";\nvar_dump( gmdate('L', $timestamp_non_leap_year) );\necho \"\\n-- Testing gmdate() function with checking leap year using Leap Year format --\\n\";\nvar_dump( gmdate('L') );\nvar_dump( gmdate('L', $timestamp) );\necho \"\\n-- Testing gmdate() function with ISO-8601 year number format --\\n\";\nvar_dump( gmdate('o') );\nvar_dump( gmdate('o', $timestamp) );\necho \"\\n-- Testing gmdate() function with full numeric representation of year format --\\n\";\nvar_dump( gmdate('Y') );\nvar_dump( gmdate('Y', $timestamp) );\necho \"\\n-- Testing gmdate() function with 2 digit representation year format --\\n\";\nvar_dump( gmdate('y') );\nvar_dump( gmdate('y', $timestamp) );\n?>")).toMatchSnapshot();
  });
});
