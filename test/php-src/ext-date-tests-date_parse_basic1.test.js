// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_parse_basic1.phpt
  it("Test date_parse() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n//Set the default time zone\ndate_default_timezone_set(\"Europe/London\");\necho \"*** Testing date_parse() : basic functionality ***\\n\";\nvar_dump( date_parse(\"2009-02-27 10:00:00.5\") );\nvar_dump( date_parse(\"10:00:00.5\") );\nvar_dump( date_parse(\"2009-02-27\") );\n?>")).toMatchSnapshot();
  });
});
