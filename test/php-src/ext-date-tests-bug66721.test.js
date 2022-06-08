// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug66721.phpt
  it("Test for bug #66721: __wakeup of DateTime segfaults when invalid object data is supplied", function () {
    expect(parser.parseCode("<?php\n$y = 'O:8:\"DateTime\":3:{s:4:\"date\";s:19:\"2014-02-15 02:00:51\";s:13:\"timezone_type\";i:3;s:8:\"timezone\";s:10:\"1234567890\";}';\nvar_dump(unserialize($y));\n?>")).toMatchSnapshot();
  });
});
