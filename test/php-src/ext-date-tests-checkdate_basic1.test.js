// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/checkdate_basic1.phpt
  it("Test date_create() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n//Set the default time zone\ndate_default_timezone_set(\"Europe/London\");\necho \"*** Testing checkdate() : basic functionality ***\\n\";\necho \"-- The following are all valid dates --\\n\";\nvar_dump( checkdate(1, 1, 2009) );\nvar_dump( checkdate(12, 31, 2009) );\nvar_dump( checkdate(7, 2, 1963) );\nvar_dump( checkdate(5, 31, 2009) );\nvar_dump( checkdate(2, 28, 2009) ); // non-leap year\nvar_dump( checkdate(2, 29, 2008) ); // leap year\nvar_dump( checkdate(7, 2, 1) );     // min year\nvar_dump( checkdate(7, 2, 32767) ); // max year\necho \"-- The following are all invalid dates --\\n\";\nvar_dump( checkdate(13, 1, 2009) );\nvar_dump( checkdate(2, 31, 2009) );\nvar_dump( checkdate(1, 32, 2009) );\nvar_dump( checkdate(2, 29, 2009) ); // non-leap year\nvar_dump( checkdate(7, 2, 32768) ); // >max year\nvar_dump( checkdate(7, 2, 0) ); // <min year\n?>")).toMatchSnapshot();
  });
});
