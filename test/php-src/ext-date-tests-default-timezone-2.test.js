// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/default-timezone-2.phpt
  it("date.timezone setting [2]", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('Europe/Oslo');\n    putenv('TZ='); // clean TZ so that it doesn't bypass the ini option\n    echo strtotime(\"2005-06-18 22:15:44\");\n?>")).toMatchSnapshot();
  });
});
