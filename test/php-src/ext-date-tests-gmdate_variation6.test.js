// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/gmdate_variation6.phpt
  it("Test gmdate() function : usage variation - Passing Month format options to format argument.", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing gmdate() : usage variation ***\\n\";\n// Initialise all required variables\ndate_default_timezone_set('UTC');\n$timestamp = mktime(8, 8, 8, 8, 8, 2008);\necho \"\\n-- Testing gmdate() function with full textual representation of month format --\\n\";\nvar_dump( gmdate('F') );\nvar_dump( gmdate('F', $timestamp) );\necho \"\\n-- Testing gmdate() function with numeric representation of month format --\\n\";\nvar_dump( gmdate('m') );\nvar_dump( gmdate('m', $timestamp) );\necho \"\\n-- Testing gmdate() function with short textual representation of month format --\\n\";\nvar_dump( gmdate('M') );\nvar_dump( gmdate('M', $timestamp) );\necho \"\\n-- Testing gmdate() function with numeric representation of month without leading zeros format --\\n\";\nvar_dump( gmdate('n') );\nvar_dump( gmdate('n', $timestamp) );\necho \"\\n-- Testing gmdate() function with number of days in a month format --\\n\";\nvar_dump( gmdate('t') );\nvar_dump( gmdate('t', $timestamp) );\n?>")).toMatchSnapshot();
  });
});
