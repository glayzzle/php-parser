// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug35699.phpt
  it("Bug #35699 (date() can't handle leap years before 1970)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set(\"UTC\");\necho date(DATE_ISO8601, strtotime('1964-06-06')), \"\\n\";\necho date(DATE_ISO8601, strtotime('1963-06-06')), \"\\n\";\necho date(DATE_ISO8601, strtotime('1964-01-06')), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
