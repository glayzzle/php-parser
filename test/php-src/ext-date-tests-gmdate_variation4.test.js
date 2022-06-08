// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/gmdate_variation4.phpt
  it("Test gmdate() function : usage variation - Passing textual representation of day formats.", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing gmdate() : usage variation ***\\n\";\n// Initialise all required variables\ndate_default_timezone_set('UTC');\n$timestamp = mktime(8, 8, 8, 8, 8, 2008);\necho \"\\n-- Testing gmdate() function with partial textual representation of day --\\n\";\nvar_dump( gmdate('D') );\nvar_dump( gmdate('D', $timestamp) );\necho \"\\n-- Testing gmdate() function with full textual representation of day --\\n\";\nvar_dump( gmdate('l') );\nvar_dump( gmdate('l', $timestamp) );\necho \"\\n-- Testing gmdate() function with English ordinal suffix --\\n\";\nvar_dump( gmdate('S') );\nvar_dump( gmdate('S', $timestamp) );\n?>")).toMatchSnapshot();
  });
});
