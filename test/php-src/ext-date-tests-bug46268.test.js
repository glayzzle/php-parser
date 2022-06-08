// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug46268.phpt
  it("Bug #46268 (When call DateTime#setTime, it seems to be called the last modify method too)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('Asia/Tokyo');\n$now = new DateTime('2008-10-10 01:02:03');\necho $now->format(\"Y-m-d H:i:s\") . PHP_EOL;\n$now->modify(\"1 day\");\necho $now->format(\"Y-m-d H:i:s\") . PHP_EOL;\n$now->modify(\"1 hour\");\necho $now->format(\"Y-m-d H:i:s\") . PHP_EOL;\n$now->setTime(0, 0, 0);\n//date_time_set($now, 0, 0, 0);\necho $now->format(\"Y-m-d H:i:s\") . PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
