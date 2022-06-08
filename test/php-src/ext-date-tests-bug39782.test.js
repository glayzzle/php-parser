// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug39782.phpt
  it("Bug #39782 (setTime() on a DateTime constructed with a Weekday yields incorrect results)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set(\"GMT\");\n$dttTest = new DateTime('Dec 10 2006 Next Wednesday');\necho $dttTest->format('D M j Y - H:i:s') . \"\\n\";\n$dttTest->setTime(12, 0, 0);\necho $dttTest->format('D M j Y - H:i:s') . \"\\n\";\n$dttTest->setTime(12, 0, 0);\necho $dttTest->format('D M j Y - H:i:s') . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
