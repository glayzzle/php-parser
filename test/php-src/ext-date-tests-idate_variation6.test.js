// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/idate_variation6.phpt
  it("Test idate() function : usage variation - Checking return of year(1 or 2 digits) format starting with zero and nonzero.", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing idate() : usage variation ***\\n\";\n// Initialise function arguments not being substituted (if any)\ndate_default_timezone_set(\"Asia/Calcutta\");\n$format = 'y';\necho \"\\n-- Testing idate() function for 2 digit year having no zero as starting number --\\n\";\n$timestamp = mktime(8, 8, 8, 8, 8, 1970);\nvar_dump( idate($format, $timestamp) );\necho \"\\n-- Testing idate() function for 2 digit year having zero as starting number --\\n\";\n$timestamp = mktime(8, 8, 8, 8, 8, 2001);\nvar_dump( idate($format, $timestamp) );\n?>")).toMatchSnapshot();
  });
});
