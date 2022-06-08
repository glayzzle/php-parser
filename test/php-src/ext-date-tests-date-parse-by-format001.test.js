// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date-parse-by-format001.phpt
  it("Test for date_parse_by_format()", function () {
    expect(parser.parseCode("<?php\n$date = \"06/08/04\";\nprint_r( date_parse_from_format( '!m/d/y', $date ) );\nprint_r( date_parse_from_format( '!m*d*y', $date ) );\n?>")).toMatchSnapshot();
  });
});
