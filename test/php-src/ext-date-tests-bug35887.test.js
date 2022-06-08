// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug35887.phpt
  it("Bug #35887 (wddx_deserialize not parsing dateTime fields properly)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set(\"UTC\");\necho date(DATE_ISO8601, strtotime('2006-1-6T0:0:0-8:0')) . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
