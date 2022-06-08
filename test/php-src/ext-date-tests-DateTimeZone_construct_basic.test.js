// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTimeZone_construct_basic.phpt
  it("Test new DateTimeZone() : basic functionality", function () {
    expect(parser.parseCode("<?php\n//Set the default time zone\ndate_default_timezone_set(\"Europe/London\");\necho \"*** Testing new DateTimeZone() : basic functionality ***\\n\";\nvar_dump( new DateTimeZone(\"GMT\") );\nvar_dump( new DateTimeZone(\"Europe/London\") );\nvar_dump( new DateTimeZone(\"America/Los_Angeles\") );\n?>")).toMatchSnapshot();
  });
});
