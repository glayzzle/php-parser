// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTime_format_basic1.phpt
  it("Test DateTime::format() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n//Set the default time zone\ndate_default_timezone_set(\"Europe/London\");\necho \"*** Testing DateTime::format() : basic functionality ***\\n\";\n$date = new DateTime(\"2005-07-14 22:30:41\");\nvar_dump( $date->format( \"F j, Y, g:i a\") );\nvar_dump( $date->format( \"m.d.y\") );\nvar_dump( $date->format( \"j, n, Y\") );\nvar_dump( $date->format( \"Ymd\") );\nvar_dump( $date->format( 'h-i-s, j-m-y, it is w Day') );\nvar_dump( $date->format( '\\i\\t \\i\\s \\t\\h\\e jS \\d\\a\\y.') );\nvar_dump( $date->format( \"D M j G:i:s T Y\") );\nvar_dump( $date->format( 'H:m:s \\m \\i\\s\\ \\m\\o\\n\\t\\h') );\nvar_dump( $date->format( \"H:i:s\") );\n?>")).toMatchSnapshot();
  });
});
