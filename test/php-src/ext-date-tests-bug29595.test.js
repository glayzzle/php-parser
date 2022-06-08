// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug29595.phpt
  it("Bug #29595 (Roman number format for months)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set(\"GMT\");\n$from_postgres = '2004-08-09 14:48:27.304809+10';\necho strtotime($from_postgres);\n?>")).toMatchSnapshot();
  });
});
