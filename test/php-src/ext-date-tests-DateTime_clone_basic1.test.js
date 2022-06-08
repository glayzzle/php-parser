// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTime_clone_basic1.phpt
  it("Test clone on DateTime objects", function () {
    expect(parser.parseCode("<?php\n//Set the default time zone\ndate_default_timezone_set('Europe/London');\necho \"*** Testing clone on DateTime objects ***\\n\";\n// Create a DateTime object..\n$orig = new DateTime('2008-07-02 14:25:41');\n// ..create a clone of it ..Clone\n$clone = clone $orig;\n// ..and modify original\n$orig->setTime(22, 41, 50);\necho \"Original: \" . $orig->format(\"H:i:s\") . \"\\n\";\necho \"Clone: \" . $clone->format(\"H:i:s\") . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
