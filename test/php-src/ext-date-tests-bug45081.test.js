// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug45081.phpt
  it("Bug #45081 (strtotime incorrectly interprets SGT time zone)", function () {
    expect(parser.parseCode("<?php\nprint strtotime('2008-05-23 00:00:00 +08');\nprint \"\\n\";\nprint strtotime('2008-05-23 00:00:00');\n?>")).toMatchSnapshot();
  });
});
