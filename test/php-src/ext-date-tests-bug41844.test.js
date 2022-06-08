// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug41844.phpt
  it("Bug #41844 (Format returns incorrect number of digits for negative years -0001 to -0999)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set(\"UTC\");\n$date = new DateTime('2007-06-28');\n$date->modify('-3006 years');\necho $date->format(DATE_ISO8601), \"\\n\";\n$date = new DateTime('2007-06-28');\n$date->modify('-2008 years');\necho $date->format(DATE_ISO8601), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
