// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug75167.phpt
  it("Bug #75167 (DateTime::add does only care about backward DST transition, not forward)", function () {
    expect(parser.parseCode("<?php\n$tz = new DateTimeZone('Europe/London'); // A timezone that has DST\n$five_hours_interval = new DateInterval('PT5H');\n$date = new DateTime(\"2014-3-30 00:00:00\", $tz);\n// Add five hours and subtract 5 hours. The $newDate should then equal the date.\n$five_hours_later = (clone $date)->add($five_hours_interval);\n$newDate = (clone $five_hours_later)->sub($five_hours_interval);\necho $date->format('c') . \"\\n\";\necho $newDate->format('c');\n?>")).toMatchSnapshot();
  });
});
