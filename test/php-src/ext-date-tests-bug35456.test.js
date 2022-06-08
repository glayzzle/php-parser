// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug35456.phpt
  it("Bug #35456 (+ 1 [time unit] format did not work)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set(\"UTC\");\n$t = 1133216119;\necho date(DATE_ISO8601, strtotime(\"+ 1 day\", $t)) . \"\\n\";\necho date(DATE_ISO8601, strtotime(\"+ 1 month\", $t)) . \"\\n\";\necho date(DATE_ISO8601, strtotime(\"+ 1 week\", $t)) . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
