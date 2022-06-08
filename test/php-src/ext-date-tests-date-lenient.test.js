// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date-lenient.phpt
  it("Test for + character in date format", function () {
    expect(parser.parseCode("<?php\n$date = \"06/08/04 12:00\";\nprint_r( date_parse_from_format( 'm/d/y', $date ) );\nprint_r( date_parse_from_format( 'm/d/y+', $date ) );\nprint_r( date_parse_from_format( '+m/d/y', $date ) );\nprint_r( date_parse_from_format( 'm/d/y++', $date ) );\n$date = \"06/08/04\";\nprint_r( date_parse_from_format( 'm/d/y+', $date ) );\nprint_r( date_parse_from_format( '+m/d/y', $date ) );\n?>")).toMatchSnapshot();
  });
});
