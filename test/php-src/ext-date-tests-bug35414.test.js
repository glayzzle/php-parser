// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug35414.phpt
  it("Bug #35414 (strtotime() no longer works with ordinal suffix)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set(\"UTC\");\necho date(DATE_ISO8601, strtotime(\"Sat 26th Nov 2005 18:18\")) . \"\\n\";\necho date(DATE_ISO8601, strtotime(\"26th Nov\", 1134340285)) . \"\\n\";\necho date(DATE_ISO8601, strtotime(\"Dec. 4th, 2005\")) . \"\\n\";\necho date(DATE_ISO8601, strtotime(\"December 4th, 2005\")) . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
