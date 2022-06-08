// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug48058.phpt
  it("Bug #48058 (Year formatter goes wrong with out-of-int range)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set(\"Europe/London\");\n$tz = new DateTimeZone(\"Europe/London\");\n$tran = $tz->getTransitions();\nvar_dump( $tran[0] );\n$base_time = '28 Feb 2008 12:00:00';\n$dt = date_create( \"$base_time +10000000000 years\" );\necho date_format( $dt, DATE_ISO8601 );\n?>")).toMatchSnapshot();
  });
});
