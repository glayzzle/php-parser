// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/gmstrftime_variation12.phpt
  it("Test gmstrftime() function : usage variation - Checking month related formats which are supported other than on Windows.", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing gmstrftime() : usage variation ***\\n\";\n// Initialise function arguments not being substituted (if any)\n$timestamp = gmmktime(8, 8, 8, 8, 8, 2008);\nsetlocale(LC_ALL, \"en_US\");\ndate_default_timezone_set(\"Asia/Calcutta\");\necho \"\\n-- Testing gmstrftime() function with  Abbreviated month name format %h --\\n\";\n$format = \"%h\";\nvar_dump( gmstrftime($format) );\nvar_dump( gmstrftime($format, $timestamp) );\n?>")).toMatchSnapshot();
  });
});
