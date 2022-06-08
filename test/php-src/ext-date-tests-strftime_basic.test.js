// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/strftime_basic.phpt
  it("Test strftime() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing strftime() : basic functionality ***\\n\";\ndate_default_timezone_set(\"Asia/Calcutta\");\n// Initialise all required variables\n$format = '%b %d %Y %H:%M:%S';\n$timestamp = mktime(8, 8, 8, 8, 8, 2008);\n// Calling strftime() with all possible arguments\nvar_dump( strftime($format, $timestamp) );\n// Calling strftime() with mandatory arguments\nvar_dump( strftime($format) );\n?>")).toMatchSnapshot();
  });
});
