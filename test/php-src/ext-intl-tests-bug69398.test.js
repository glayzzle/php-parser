// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug69398.phpt
  it("IntlDateFormatter::formatObject(): returns wrong value when time style is NONE.", function () {
    expect(parser.parseCode("<?php\n$millitimestamp = 1428133423941.0; // 14:43:43 April 04 2015\n$date = IntlCalendar::createInstance('Asia/Ho_Chi_Minh');\n$date->setTime($millitimestamp);\necho IntlDateFormatter::formatObject($date, array(IntlDateFormatter::SHORT, IntlDateFormatter::NONE), 'vi_VN'), \"\\n\";\necho IntlDateFormatter::formatObject ($date, array(IntlDateFormatter::SHORT, IntlDateFormatter::NONE), 'ko_KR'), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
