// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug77571.phpt
  it("Bug #77571 (DateTime's diff DateInterval incorrect in timezones from UTC+01:00 to UTC+12:00", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('Europe/London');\n$date3 = DateTime::createFromFormat('Y-m-d H:i:s', '2019-04-01 00:00:00'); //  2019-04-01 00:00:00.0 Europe/London (+01:00)\n$date4 = clone $date3;\n$date4->modify('+5 week'); // 2019-05-06 00:00:00.0 Europe/London (+01:00)\n$differenceDateInterval2 = $date3->diff($date4); // interval: + 1m 4d; days 35\nprint_r($differenceDateInterval2);\n?>")).toMatchSnapshot();
  });
});
