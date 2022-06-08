// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/strftime_variation11.phpt
  it("Test strftime() function : usage variation - Checking month related formats which was not supported on Windows before VC14.", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing strftime() : usage variation ***\\n\";\n// Initialise function arguments not being substituted (if any)\nsetlocale(LC_ALL, \"C\");\ndate_default_timezone_set(\"Asia/Calcutta\");\n$timestamp = mktime(8, 8, 8, 8, 8, 2008);\necho \"\\n-- Testing strftime() function with  Abbreviated month name format %h --\\n\";\n$format = \"%h\";\nvar_dump( strftime($format) );\nvar_dump( strftime($format, $timestamp) );\n?>")).toMatchSnapshot();
  });
});
