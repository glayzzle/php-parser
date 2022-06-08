// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTimeZone_extends_basic1.phpt
  it("Test DateTimeZone class inheritance", function () {
    expect(parser.parseCode("<?php\n//Set the default time zone\ndate_default_timezone_set(\"Europe/London\");\necho \"*** Testing basic DateTimeZone inheritance() ***\\n\";\nclass DateTimeZoneExt extends DateTimeZone\n{\n    public function __toString()\n    {\n        return parent::getName();\n    }\n}\necho \"\\n-- Create an instance of DateTimeZoneExt --\\n\";\n$d = new DateTimeZoneExt(\"America/Los_Angeles\");\necho \"\\n-- Invoke __toString --\\n\";\necho $d . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
