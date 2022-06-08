// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/gmdate_variation5.phpt
  it("Test gmdate() function : usage variation - Passing Week representation to format.", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing gmdate() : usage variation ***\\n\";\n// Initialise all required variables\ndate_default_timezone_set('UTC');\n$timestamp = mktime(8, 8, 8, 8, 8, 2008);\necho \"\\n-- Testing gmdate() function with ISO-8601 week number of year format --\\n\";\nvar_dump( gmdate('W') );\nvar_dump( gmdate('W', $timestamp) );\n?>")).toMatchSnapshot();
  });
});
