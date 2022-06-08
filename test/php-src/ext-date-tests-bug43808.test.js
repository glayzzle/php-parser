// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug43808.phpt
  it("Bug #43808 (date_create never fails (even when it should))", function () {
    expect(parser.parseCode("<?php\n$date = date_create('asdfasdf');\nif ($date instanceof DateTime) {\n    echo \"this is wrong, should be bool\";\n}\nvar_dump( $date );\nvar_dump( DateTime::getLastErrors() );\nvar_dump( date_get_last_errors() );\n?>")).toMatchSnapshot();
  });
});
