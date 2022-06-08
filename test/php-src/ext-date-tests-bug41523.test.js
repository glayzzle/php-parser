// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug41523.phpt
  it("Bug #41523 (strtotime('0000-00-00 00:00:00') is parsed as 1999-11-30) (32 bit)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set(\"UTC\");\nvar_dump( date_parse('0000-00-00 00:00:00') );\nvar_dump( strtotime('0000-00-00 00:00:00') );\nvar_dump( $dt = new DateTime('0000-00-00 00:00:00') );\necho $dt->format( DateTime::ISO8601 ), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
