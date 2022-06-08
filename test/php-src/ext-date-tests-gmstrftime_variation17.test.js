// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/gmstrftime_variation17.phpt
  it("Test gmstrftime() function : usage variation - Checking day related formats which was not supported on Windows before vc14.", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing gmstrftime() : usage variation ***\\n\";\n// Initialise function arguments not being substituted (if any)\n$timestamp = gmmktime(8, 8, 8, 8, 8, 2008);\nsetlocale(LC_ALL, \"C\");\ndate_default_timezone_set(\"Asia/Calcutta\");\necho \"\\n-- Testing gmstrftime() function with Day of the month as decimal single digit format --\\n\";\n$format = \"%e\";\nvar_dump( gmstrftime($format) );\nvar_dump( gmstrftime($format, $timestamp) );\n?>")).toMatchSnapshot();
  });
});
