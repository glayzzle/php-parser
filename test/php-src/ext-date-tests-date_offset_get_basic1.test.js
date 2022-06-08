// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_offset_get_basic1.phpt
  it("Test date_offset_get() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n//Set the default time zone\ndate_default_timezone_set('Europe/London');\necho \"*** Testing date_offset_get() : basic functionality ***\\n\";\n$winter = date_create('2008-12-25 14:25:41');\n$summer = date_create('2008-07-02 14:25:41');\necho \"Winter offset: \" . date_offset_get($winter) / 3600 . \" hours\\n\";\necho \"Summer offset: \" . date_offset_get($summer) / 3600 . \" hours\\n\";\n?>")).toMatchSnapshot();
  });
});
