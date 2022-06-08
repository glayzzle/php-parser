// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTime_getOffset_basic1.phpt
  it("Test DateTime::getOffset() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n//Set the default time zone\ndate_default_timezone_set('Europe/London');\necho \"*** Testing DateTime::getOffset() : basic functionality ***\\n\";\n$winter = new DateTime('2008-12-25 14:25:41');\n$summer = new DateTime('2008-07-02 14:25:41');\necho \"Winter offset: \" . $winter->getOffset() / 3600 . \" hours\\n\";\necho \"Summer offset: \" . $summer->getOffset() / 3600 . \" hours\\n\";\n?>")).toMatchSnapshot();
  });
});
