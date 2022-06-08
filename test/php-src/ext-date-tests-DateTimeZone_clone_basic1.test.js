// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTimeZone_clone_basic1.phpt
  it("Test clone on DateTimeZone objects", function () {
    expect(parser.parseCode("<?php\n//Set the default time zone\ndate_default_timezone_set('Europe/London');\necho \"*** Testing clone on DateTime objects ***\\n\";\n// Create a DateTimeZone object..\n$orig =  new DateTimeZone(\"GMT\");\n// ..create a clone of it ..Clone\n$clone = clone $orig;\nvar_dump($orig);\nvar_dump($clone);\nif ($clone != $orig) {\n    echo \"TEST FAILED : objects not equal\\n\";\n}else if ($clone === $orig) {\n    echo \"TEST FAILED : objects identical\\n\";\n} else {\n    echo \"TEST PASSED : Objects equal but not indetical\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
