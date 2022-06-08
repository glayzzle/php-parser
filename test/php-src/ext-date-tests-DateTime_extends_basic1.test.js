// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTime_extends_basic1.phpt
  it("Test DateTime class inheritance", function () {
    expect(parser.parseCode("<?php\n//Set the default time zone\ndate_default_timezone_set(\"Europe/London\");\necho \"*** Testing basic DateTime inheritance() ***\\n\";\nclass DateTimeExt extends DateTime\n{\n    public static $format = \"F j, Y, g:i:s a\";\n    public function __toString()\n    {\n        return parent::format(self::$format);\n    }\n}\necho \"\\n-- Create an instance of DateTimeExt --\\n\";\n$d = new DateTimeExt(\"1967-05-01 22:30:41\");\necho \"\\n-- Invoke __toString --\\n\";\necho $d . \"\\n\";\necho \"\\n -- modify date and time --\\n\";\n$d->setDate(1963, 7, 2);\n$d->setTime(10, 45, 30);\necho \"\\n-- Invoke __toString again --\\n\";\necho $d . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
