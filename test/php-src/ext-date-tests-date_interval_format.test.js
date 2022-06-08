// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_interval_format.phpt
  it("Test date_interval_format() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n$interval = new DateInterval('P2Y4DT6H8M');\necho date_interval_format($interval, '%d days');\necho PHP_EOL;\n$interval = new DateInterval('P32D');\necho date_interval_format($interval, '%d days');\n?>")).toMatchSnapshot();
  });
});
