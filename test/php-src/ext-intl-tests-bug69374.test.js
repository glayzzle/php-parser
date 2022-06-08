// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug69374.phpt
  it("IntlDateFormatter::formatObject(): returns wrong utf8 value when $format param is utf8 string pattern.", function () {
    expect(parser.parseCode("<?php\n$millitimestamp = 1428133423941.0; // 14:43:43 April 04 2015\n$pattern1 = '\\'tháng\\' MM, y'; // yMM format for Vietnamese\n$pattern2 = 'y년 MMM'; // yMM format for Korean\n$date = IntlCalendar::createInstance('Asia/Ho_Chi_Minh');\n$date->setTime($millitimestamp);\necho IntlDateFormatter::formatObject($date, $pattern1, 'vi_VN'), \"\\n\";\necho IntlDateFormatter::formatObject ($date, $pattern2, 'ko_KR'), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
