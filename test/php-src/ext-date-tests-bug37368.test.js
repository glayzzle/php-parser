// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug37368.phpt
  it("Bug #37368 (Incorrect timestamp returned for strtotime()).", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('UTC');\necho date(\"r\", strtotime(\"Mon, 08 May 2006 13:06:44 -0400 +30 days\"));\n?>")).toMatchSnapshot();
  });
});
