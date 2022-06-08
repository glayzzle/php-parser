// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/strtotime-mysql-64bit.phpt
  it("strtotime() and mysql timestamps (64 bit)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('UTC');\n/* Format: YYYYMMDDHHMMSS */\n$d[] = '19970523091528';\n$d[] = '20001231185859';\n$d[] = '20800410101010'; // overflow..\nforeach($d as $date) {\n    $time = strtotime($date);\n    if (is_integer($time)) {\n        var_dump(date('r', $time));\n    } else {\n        var_dump($time);\n    }\n}\n?>")).toMatchSnapshot();
  });
});
