// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTime_extends_basic2.phpt
  it("Test DateTime class inheritance : with user space __construct magic method", function () {
    expect(parser.parseCode("<?php\n//Set the default time zone\ndate_default_timezone_set(\"Europe/London\");\necho \"*** Testing new DateTime() : with user space __construct magic method ***\\n\";\nclass DateTimeExt extends DateTime\n{\n    public function __construct ($date = null, DateTimeZone  $dtz = null)\n    {\n        if($dtz === null)\n        {\n            $dtz = new DateTimeZone(date_default_timezone_get());\n        }\n        parent::__construct($date, $dtz);\n    }\n}\n$d = new DateTimeExt(\"1967-05-01 22:30:41\");\necho $d->format(\"F j, Y, g:i:s a\") . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
