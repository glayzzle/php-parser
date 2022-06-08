// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTimeZone_clone_basic4.phpt
  it("Test clone of DateTimeZone derived objects with __clone magic method", function () {
    expect(parser.parseCode("<?php\n//Set the default time zone\ndate_default_timezone_set(\"Europe/London\");\nclass DateTimeZoneExt1 extends DateTimeZone {\n    public function __clone() {\n        echo \"-- DateTimeExt1 __clone magic method called --\\n\";\n    }\n}\necho \"*** Testing clone of objects derived from DateTimeZone class with __clone magic method***\\n\";\n$d1 = new DateTimeZoneExt1(\"America/New_York\");\n$d1_clone = clone $d1;\n//verify clone by calling method on new object\nvar_dump( $d1_clone->getName() );\n?>")).toMatchSnapshot();
  });
});
