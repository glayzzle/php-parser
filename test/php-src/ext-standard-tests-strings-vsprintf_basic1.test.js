// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/vsprintf_basic1.phpt
  it("Test vsprintf() function : basic functionality - string format", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing vsprintf() : basic functionality - using string format ***\\n\";\n// Initialise all required variables\n$format = \"format\";\n$format1 = \"%s\";\n$format2 = \"%s %s\";\n$format3 = \"%s %s %s\";\n$arg1 = array(\"one\");\n$arg2 = array(\"one\",\"two\");\n$arg3 = array(\"one\",\"two\",\"three\");\nvar_dump( vsprintf($format1,$arg1) );\nvar_dump( vsprintf($format2,$arg2) );\nvar_dump( vsprintf($format3,$arg3) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
