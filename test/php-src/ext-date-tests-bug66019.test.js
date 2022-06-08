// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug66019.phpt
  it("Bug #66019 (DateTime object does not support short ISO 8601 time format - YYYY-MM-DDTHH)", function () {
    expect(parser.parseCode("<?php\n$tz = new DateTimeZone(\"Europe/Amsterdam\");\n$dateObject = new DateTime( '2012-02-02T10', $tz );\necho $dateObject->format( 'j F Y H:i' );\n?>")).toMatchSnapshot();
  });
});
