// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTime_construct_basic1.phpt
  it("Test new DateTime() : basic functionality", function () {
    expect(parser.parseCode("<?php\n//Set the default time zone\ndate_default_timezone_set(\"Europe/London\");\necho \"*** Testing new DateTime() : basic functionality ***\\n\";\nvar_dump( new DateTime('') );\nvar_dump( new DateTime(\"GMT\") );\nvar_dump( new DateTime(\"2005-07-14 22:30:41\") );\nvar_dump( new DateTime(\"2005-07-14 22:30:41 GMT\") );\n?>")).toMatchSnapshot();
  });
});
