// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug34087.phpt
  it("Bug #34087 (strtotime() does not work with date format \"Y/m/d\")", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set(\"UTC\");\necho \"Y/m/d: \", strtotime(\"2005/8/12\"), \"\\n\";\necho \"Y-m-d: \", strtotime(\"2005-8-12\"), \"\\n\";\necho date(DATE_ISO8601, strtotime(\"2005/1/2\")), \"\\n\";\necho date(DATE_ISO8601, strtotime(\"2005/01/02\")), \"\\n\";\necho date(DATE_ISO8601, strtotime(\"2005/01/2\")), \"\\n\";\necho date(DATE_ISO8601, strtotime(\"2005/1/02\")), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
