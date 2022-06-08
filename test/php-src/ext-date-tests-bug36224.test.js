// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug36224.phpt
  it("Bug #36224 (date(DATE_ATOM) gives wrong resulsts)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set(\"Europe/Oslo\");\necho date(DATE_ATOM, strtotime('2006-01-31T19:23:56Z')) . \"\\n\";\necho date(DATE_ATOM, strtotime('2006-01-31T19:23:56')) . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
