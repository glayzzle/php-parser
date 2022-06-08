// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/idate_basic.phpt
  it("Test idate() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing idate() : basic functionality ***\\n\";\n// Initialise all required variables\n$format = 'Y';\n// Calling idate() with mandatory arguments\ndate_default_timezone_set(\"Asia/Calcutta\");\nvar_dump( idate($format) );\n?>")).toMatchSnapshot();
  });
});
