// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug35422.phpt
  it("Bug #35422 (strtotime() does not parse times with UTC as timezone)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set(\"UTC\");\necho date(DATE_ISO8601, strtotime(\"July 1, 2000 00:00:00 UTC\")) . \"\\n\";\necho date(DATE_ISO8601, strtotime(\"July 1, 2000 00:00:00 GMT\")) . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
