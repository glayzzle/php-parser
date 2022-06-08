// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTime_compare_basic1.phpt
  it("Test of compare object handler for DateTime objects", function () {
    expect(parser.parseCode("<?php\necho \"Simple test for DateTime compare object handler\\n\";\n//Set the default time zone\ndate_default_timezone_set(\"Europe/London\");\nclass DateTimeExt1 extends DateTime {\n}\nclass DateTimeExt2 extends DateTime{\n    public $foo = \"Hello\";\n    private $bar = 99;\n}\nclass DateTimeExt3 extends DateTimeExt2 {\n}\n$obj1 = new DateTime(\"2009-02-12 12:47:41 GMT\");\n$obj2 = new DateTimeExt1(\"2009-02-12 12:47:41 GMT\");\n$obj3 = new DateTimeExt2(\"2009-02-12 12:47:41 GMT\");\n$obj4 = new DateTimeExt3(\"2009-02-12 12:47:41 GMT\");\necho \"\\n-- All the following tests should compare equal --\\n\";\nvar_dump($obj1 == $obj1);\nvar_dump($obj1 == $obj2);\nvar_dump($obj1 == $obj3);\nvar_dump($obj1 == $obj4);\nvar_dump($obj2 == $obj3);\nvar_dump($obj2 == $obj4);\nvar_dump($obj3 == $obj4);\ndate_modify($obj1, \"+1 day\");\necho \"\\n-- The following test should still compare equal --\\n\";\nvar_dump($obj1 == $obj1);\necho \"\\n-- All the following tests should now compare NOT equal --\\n\";\nvar_dump($obj1 == $obj2);\nvar_dump($obj1 == $obj3);\nvar_dump($obj1 == $obj4);\necho \"\\n-- All the following tests should again compare equal --\\n\";\ndate_modify($obj2, \"+1 day\");\ndate_modify($obj3, \"+1 day\");\ndate_modify($obj4, \"+1 day\");\nvar_dump($obj1 == $obj2);\nvar_dump($obj1 == $obj3);\nvar_dump($obj1 == $obj4);\n?>")).toMatchSnapshot();
  });
});
