// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTime_extends_basic3.phpt
  it("Test DateTime class inheritance : with user space format() method", function () {
    expect(parser.parseCode("<?php\n//Set the default time zone\ndate_default_timezone_set(\"Europe/London\");\necho \"*** Testing new DateTime() : with user format() method ***\\n\";\nclass DateTimeExt extends DateTime\n{\n    public function format($format = \"F j, Y, g:i:s a\"): string\n    {\n        return parent::format($format);\n    }\n}\n$d = new DateTimeExt(\"1967-05-01 22:30:41\");\necho $d->format() . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
