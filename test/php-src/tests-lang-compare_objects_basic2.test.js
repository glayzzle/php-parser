// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/compare_objects_basic2.phpt
  it("Test object compare when object handler different", function () {
    expect(parser.parseCode("<?php\n//Set the default time zone\ndate_default_timezone_set(\"Europe/London\");\necho \"Simple test comparing two objects with different compare callback handler\\n\";\nclass X {\n}\n$obj1 = new X();\n$obj2 = new DateTime((\"2009-02-12 12:47:41 GMT\"));\nvar_dump($obj1 == $obj2);\n?>")).toMatchSnapshot();
  });
});
