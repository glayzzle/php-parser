// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug52290.phpt
  it("Bug #52290 (setDate, setISODate, setTime works wrong when DateTime created from timestamp)", function () {
    expect(parser.parseCode("<?php\n$tz = 'UTC';\ndate_default_timezone_set($tz);\n$ts = strtotime('2006-01-01');\n$dt = new DateTime('@'.$ts);\n$dt->setTimezone(new DateTimeZone($tz));\nvar_dump($dt->format('o-\\WW-N | Y-m-d | H:i:s | U'));\n$dt->setISODate(2005, 52, 1);\nvar_dump($dt->format('o-\\WW-N | Y-m-d | H:i:s | U'));\n$dt->setDate(2007, 10, 10);\nvar_dump($dt->format('o-\\WW-N | Y-m-d | H:i:s | U'));\n$dt->setTime(20, 30, 40);\nvar_dump($dt->format('o-\\WW-N | Y-m-d | H:i:s | U'));\n?>")).toMatchSnapshot();
  });
});
