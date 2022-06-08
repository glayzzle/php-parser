// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/localtime_basic.phpt
  it("Test localtime() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing localtime() : basic functionality ***\\n\";\ndate_default_timezone_set(\"UTC\");\n// Initialise all required variables\n$timestamp = 10;\n$associative_array = true;\n// Calling localtime() with all possible arguments\nvar_dump( localtime($timestamp, $associative_array) );\n// Calling localtime() with possible optional arguments\nvar_dump( localtime($timestamp) );\n// Calling localtime() with mandatory arguments\nvar_dump( localtime() );\n?>")).toMatchSnapshot();
  });
});
