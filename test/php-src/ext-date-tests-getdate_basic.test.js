// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/getdate_basic.phpt
  it("Test getdate() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing getdate() : basic functionality ***\\n\";\n//Set the default time zone\ndate_default_timezone_set(\"Asia/Calcutta\");\n// Initialise all required variables\n$timestamp = 10;\n// Calling getdate() with all possible arguments\nvar_dump( getdate($timestamp) );\n// Calling getdate() with mandatory arguments\nvar_dump( getdate() );\n?>")).toMatchSnapshot();
  });
});
