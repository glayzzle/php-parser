// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTime_clone_basic4.phpt
  it("Test clone of DateTime derived objects with __clone magic method", function () {
    expect(parser.parseCode("<?php\n//Set the default time zone\ndate_default_timezone_set(\"Europe/London\");\n//Set the default time zone\ndate_default_timezone_set(\"Europe/London\");\nclass DateTimeExt1 extends DateTime {\n    public function __clone() {\n        echo \"-- DateTimeExt1 __clone magic method called --\\n\";\n    }\n}\necho \"*** Testing clone of objects derived from DateTime class with __clone magic method***\\n\";\n$d1 = new DateTimeExt1(\"2009-02-03 12:34:41 GMT\");\n$d1_clone = clone $d1;\n//verify clone by calling method on new object\nvar_dump( $d1_clone->format( \"m.d.y\") );\n?>")).toMatchSnapshot();
  });
});
