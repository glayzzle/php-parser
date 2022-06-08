// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/gmdate_variation12.phpt
  it("Test gmdate() function : usage variation - Valid and invalid range of timestamp 32 bits.", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing gmdate() : usage variation ***\\n\";\n// Initialise all required variables\ndate_default_timezone_set('UTC');\necho \"\\n-- Testing gmdate() function with minimum range of timestamp --\\n\";\n$timestamp = mktime(20, 45, 54, 12, 13, 1901);\nvar_dump( gmdate(DATE_ISO8601, $timestamp) );\necho \"\\n-- Testing gmdate() function with less than the range of timestamp --\\n\";\n$timestamp = mktime(20, 45, 50, 12, 13, 1901);\nvar_dump( gmdate(DATE_ISO8601, $timestamp) );\necho \"\\n-- Testing gmdate() function with maximum range of timestamp --\\n\";\n$timestamp = mktime(03, 14, 07, 1, 19, 2038);\nvar_dump( gmdate(DATE_ISO8601, $timestamp) );\necho \"\\n-- Testing gmdate() function with greater than the range of timestamp --\\n\";\n$timestamp = mktime(03, 14, 10, 1, 19, 2038);\nvar_dump( gmdate(DATE_ISO8601, $timestamp) );\n?>")).toMatchSnapshot();
  });
});
