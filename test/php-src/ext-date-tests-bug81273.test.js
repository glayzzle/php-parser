// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug81273.phpt
  it("Bug #81273: Date interval calculation not correct", function () {
    expect(parser.parseCode("<?php\n$time = '2000-01-01 00:00:00.000000';\n$tz_aus = new DateTimeZone('Australia/Sydney');\n$tz_us = new DateTimeZone('America/Los_Angeles');\n$auz = new DateTime($time, $tz_aus);\n$us = new DateTime($time, $tz_us);\n$diff = $auz->diff($us);\n// Should output int(19)\nvar_dump($diff->h);\n?>")).toMatchSnapshot();
  });
});
