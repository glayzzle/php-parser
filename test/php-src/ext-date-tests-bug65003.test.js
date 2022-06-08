// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug65003.phpt
  it("Bug #65003 (Wrong date diff)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set(\"Europe/Moscow\");\n$datetime1 = new DateTime('13-03-01');\n$datetime2 = new DateTime('13-04-01');\n$datetime3 = new DateTime('13-03-02');\n$datetime4 = new DateTime('13-04-02');\n$interval = $datetime2->diff($datetime1);\necho $interval->format('%m month, %d days'), \"\\n\"; //1 month, 3 days\n$interval = $datetime4->diff($datetime3);\necho $interval->format('%m month, %d days'), \"\\n\"; //1 month, 0 days\n?>")).toMatchSnapshot();
  });
});
