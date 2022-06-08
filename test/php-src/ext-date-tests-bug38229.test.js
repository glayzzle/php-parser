// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug38229.phpt
  it("Bug #38229 (strtotime() does not parse YYYY-MM)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set(\"GMT\");\necho date(\"Y-m\", strtotime('2006-1')).\"\\n\";\necho date(\"Y-m\", strtotime('2006-03')).\"\\n\";\necho date(\"Y-m\", strtotime('2006-12')).\"\\n\";\n?>")).toMatchSnapshot();
  });
});
