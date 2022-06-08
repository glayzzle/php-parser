// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug74274.phpt
  it("Bug #74274 (Handling DST transitions correctly)", function () {
    expect(parser.parseCode("<?php\n$tz = new DateTimeZone(\"Europe/Paris\");\n$startDate = new \\DateTime('2018-10-28 00:00:00', $tz);\n$endDateBuggy = new \\DateTime('2018-10-29 23:00:00', $tz);\nprint_r($startDate->diff($endDateBuggy));\n?>")).toMatchSnapshot();
  });
});
