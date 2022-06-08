// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTime_format_basic2.phpt
  it("Test date_format() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n//Set the default time zone\ndate_default_timezone_set(\"Europe/London\");\necho \"*** Testing date_format() : basic functionality - formatting coinstants ***\\n\";\n$date = new DateTime(\"2005-07-14 22:30:41\");\nvar_dump( $date->format( DateTime::ATOM) ) ;\nvar_dump( $date->format( DateTime::COOKIE) ) ;\nvar_dump( $date->format( DateTime::ISO8601) ) ;\nvar_dump( $date->format( DateTime::RFC822) ) ;\nvar_dump( $date->format( DateTime::RFC850) ) ;\nvar_dump( $date->format( DateTime::RFC1036) ) ;\nvar_dump( $date->format( DateTime::RFC1123) ) ;\nvar_dump( $date->format( DateTime:: RFC2822) ) ;\nvar_dump( $date->format( DateTime::RFC3339) ) ;\nvar_dump( $date->format( DateTime::RSS) ) ;\nvar_dump( $date->format( DateTime::W3C) ) ;\n?>")).toMatchSnapshot();
  });
});
