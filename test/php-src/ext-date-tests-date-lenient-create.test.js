// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date-lenient-create.phpt
  it("Test for + character in date format", function () {
    expect(parser.parseCode("<?php\n$tz = new DateTimeZone(\"UTC\");\n$date = \"06/08/04 12:00\";\necho \"==\\n\";\nprint_r( date_create_from_format( 'm/d/y', $date , $tz) );\nprint_r( date_get_last_errors() );\necho \"==\\n\";\nprint_r( date_create_from_format( 'm/d/y+', $date , $tz)->setTime(0, 0) );\nprint_r( date_get_last_errors() );\necho \"==\\n\";\nprint_r( date_create_from_format( '+m/d/y', $date , $tz)->setTime(0, 0) );\nprint_r( date_get_last_errors() );\necho \"==\\n\";\nprint_r( date_create_from_format( 'm/d/y++', $date , $tz)->setTime(0, 0) );\nprint_r( date_get_last_errors() );\necho \"==\\n\";\n$date = \"06/08/04\";\nprint_r( date_create_from_format( 'm/d/y+', $date , $tz)->setTime(0, 0) );\nprint_r( date_get_last_errors() );\necho \"==\\n\";\nprint_r( date_create_from_format( '+m/d/y', $date , $tz)->setTime(0, 0) );\nprint_r( date_get_last_errors() );\necho \"==\\n\";\n?>")).toMatchSnapshot();
  });
});
