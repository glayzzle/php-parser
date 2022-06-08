// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTimeZone_clone_basic2.phpt
  it("Testing clone on objects whose class derived from DateTimeZone class", function () {
    expect(parser.parseCode("<?php\n//Set the default time zone\ndate_default_timezone_set(\"Europe/London\");\nclass DateTimeZoneExt1 extends DateTimeZone {\n    public $property1 = 99;\n    public $property2 = \"Hello\";\n}\nclass DateTimeZoneExt2 extends DateTimeZoneExt1 {\n    public $property3 = true;\n    public $property4 = 10.5;\n}\necho \"*** Testing clone on objects whose class derived from DateTimeZone class ***\\n\";\n$d1 = new DateTimeZoneExt1(\"Europe/London\");\nvar_dump($d1);\n$d1_clone = clone $d1;\nvar_dump($d1_clone);\n$d2 = new DateTimeZoneExt2(\"Europe/London\");\nvar_dump($d2);\n$d2_clone = clone $d2;\nvar_dump($d2_clone);\n?>")).toMatchSnapshot();
  });
});
