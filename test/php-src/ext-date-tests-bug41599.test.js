// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug41599.phpt
  it("Bug #41599 (setTime() fails after modify() is used)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('Europe/London');\n$start = new DateTime('2008-01-17 last Monday');\necho $start->format('Y-m-d H:i:s'),PHP_EOL;\n//good\n$start->modify('Tuesday');\necho $start->format('Y-m-d H:i:s'),PHP_EOL;\n//good\n$start->setTime(4, 0, 0);\necho $start->format('Y-m-d H:i:s'),PHP_EOL;\n//jumped to next Sunday\n$start->setTime(8, 0, 0);\necho $start->format('Y-m-d H:i:s'),PHP_EOL;\n//jumped to next Sunday again\n?>")).toMatchSnapshot();
  });
});
