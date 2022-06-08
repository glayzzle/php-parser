// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/gmdate_variation11.phpt
  it("Test gmdate() function : usage variation - Passing Full Date/Time format options to format argument.", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing gmdate() : usage variation ***\\n\";\n// Initialise all required variables\ndate_default_timezone_set('UTC');\n$timestamp = mktime(8, 8, 8, 8, 8, 2008);\necho \"\\n-- Testing gmdate() function with ISO 8601 date format --\\n\";\nvar_dump( gmdate('c') );\nvar_dump( gmdate('c', $timestamp) );\necho \"\\n-- Testing gmdate() function with RFC 2822 date format --\\n\";\nvar_dump( gmdate('r') );\nvar_dump( gmdate('r', $timestamp) );\necho \"\\n-- Testing gmdate() function with seconds since Unix Epoch format --\\n\";\nvar_dump( gmdate('U') );\nvar_dump( gmdate('U', $timestamp) );\n?>")).toMatchSnapshot();
  });
});
