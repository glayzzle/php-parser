// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug44780.phpt
  it("Bug #44780 (some time zone offsets not recognized by timezone_name_from_abbr)", function () {
    expect(parser.parseCode("<?php\nvar_dump( timezone_name_from_abbr(\"\", 5.5*3600, false) );\nvar_dump( timezone_name_from_abbr(\"\", 28800, false) );\n?>")).toMatchSnapshot();
  });
});
