// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_format_basic1.phpt
  it("Test date_format() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n//Set the default time zone\ndate_default_timezone_set(\"Europe/London\");\necho \"*** Testing date_format() : basic functionality ***\\n\";\n$date = date_create(\"2005-07-14 22:30:41\");\nvar_dump( date_format($date, \"F j, Y, g:i a\") );\nvar_dump( date_format($date, \"m.d.y\") );\nvar_dump( date_format($date, \"j, n, Y\") );\nvar_dump( date_format($date, \"Ymd\") );\nvar_dump( date_format($date, 'h-i-s, j-m-y, it is w Day') );\nvar_dump( date_format($date, '\\i\\t \\i\\s \\t\\h\\e jS \\d\\a\\y.') );\nvar_dump( date_format($date, \"D M j G:i:s T Y\") );\nvar_dump( date_format($date, 'H:m:s \\m \\i\\s\\ \\m\\o\\n\\t\\h') );\nvar_dump( date_format($date, \"H:i:s\") );\n?>")).toMatchSnapshot();
  });
});
