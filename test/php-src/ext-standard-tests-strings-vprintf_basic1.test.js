// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/vprintf_basic1.phpt
  it("Test vprintf() function : basic functionality - string format", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing vprintf() : basic functionality - using string format ***\\n\";\n// Initialise all required variables\n$format = \"format\";\n$format1 = \"%s\";\n$format2 = \"%s %s\";\n$format3 = \"%s %s %s\";\n$arg1 = array(\"one\");\n$arg2 = array(\"one\",\"two\");\n$arg3 = array(\"one\",\"two\",\"three\");\n$result = vprintf($format1,$arg1);\necho \"\\n\";\nvar_dump($result);\n$result = vprintf($format2,$arg2);\necho \"\\n\";\nvar_dump($result);\n$result = vprintf($format3,$arg3);\necho \"\\n\";\nvar_dump($result);\n?>")).toMatchSnapshot();
  });
});
