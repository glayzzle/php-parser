// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_create_basic.phpt
  it("Test date_create() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n//Set the default time zone\ndate_default_timezone_set(\"Europe/London\");\necho \"*** Testing date_create() : basic functionality ***\\n\";\nvar_dump( date_create() );\nvar_dump( date_create(\"GMT\") );\nvar_dump( date_create(\"2005-07-14 22:30:41\") );\nvar_dump( date_create(\"2005-07-14 22:30:41 GMT\") );\n?>")).toMatchSnapshot();
  });
});
