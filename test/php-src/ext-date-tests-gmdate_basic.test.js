// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/gmdate_basic.phpt
  it("Test gmdate() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing gmdate() : basic functionality ***\\n\";\n// Initialise all required variables\ndate_default_timezone_set('UTC');\n$format = DATE_ISO8601;\n$timestamp = mktime(8, 8, 8, 8, 8, 2008);\n// Calling gmdate() with all possible arguments\nvar_dump( gmdate($format, $timestamp) );\n// Calling gmdate() with mandatory arguments\nvar_dump( gmdate($format) );\n?>")).toMatchSnapshot();
  });
});
