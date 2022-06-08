// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug54597.phpt
  it("Bug #54597 (incorrect years for DateTime objects created with 4-digit years)", function () {
    expect(parser.parseCode("<?php\n$tz = new DateTimeZone(\"Europe/Amsterdam\");\n$dateObject = new DateTime( 'January 0099', $tz );\necho $dateObject->format( 'Y' ), \"\\n\";\n$dateObject = new DateTime( 'January 1, 0099', $tz );\necho $dateObject->format( 'Y' ), \"\\n\";\n$dateObject = new DateTime( '0099-01', $tz );\necho $dateObject->format( 'Y' ), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
