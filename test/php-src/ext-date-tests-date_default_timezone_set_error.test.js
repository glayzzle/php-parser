// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_default_timezone_set_error.phpt
  it("Test date_default_timezone_set() function : error variations", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing date_default_timezone_set() : error variations ***\\n\";\necho \"\\n-- Testing date_default_timezone_set() function with invalid timezone identifier  --\\n\";\nvar_dump( date_default_timezone_set(\"foo\") );\n?>")).toMatchSnapshot();
  });
});
