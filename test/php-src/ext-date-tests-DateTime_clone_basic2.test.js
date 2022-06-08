// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTime_clone_basic2.phpt
  it("Test clone of objects whose class derived from DateTime class", function () {
    expect(parser.parseCode("<?php\n//Set the default time zone\ndate_default_timezone_set(\"Europe/London\");\nclass DateTimeExt1 extends DateTime {\n    public $property1 = 99;\n    public $property2 = \"Hello\";\n}\nclass DateTimeExt2 extends DateTimeExt1 {\n    public $property3 = true;\n    public $property4 = 10.5;\n}\necho \"*** Testing clone on objects whose class derived from DateTime class ***\\n\";\n$d1 = new DateTimeExt1(\"2009-02-03 12:34:41 GMT\");\nvar_dump($d1);\n$d1_clone = clone $d1;\nvar_dump($d1_clone);\n$d2 = new DateTimeExt2(\"2009-02-03 12:34:41 GMT\");\nvar_dump($d2);\n$d2_clone = clone $d2;\nvar_dump($d2_clone);\n?>")).toMatchSnapshot();
  });
});
