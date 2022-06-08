// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/gettimeofday_basic.phpt
  it("Test gettimeofday() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing gettimeofday() : basic functionality ***\\n\";\ndate_default_timezone_set(\"Asia/Calcutta\");\n// Initialise all required variables\n$get_as_float = true;\n// Calling gettimeofday() with all possible arguments\nvar_dump( gettimeofday($get_as_float) );\n// Calling gettimeofday() with mandatory arguments\nvar_dump( gettimeofday() );\n// Initialise all required variables\n$get_as_float = false;\n// Calling gettimeofday() with all possible arguments\nvar_dump( gettimeofday($get_as_float) );\n?>")).toMatchSnapshot();
  });
});
