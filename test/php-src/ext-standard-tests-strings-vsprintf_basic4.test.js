// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/vsprintf_basic4.phpt
  it("Test vsprintf() function : basic functionality - bool format", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing vsprintf() : basic functionality - using bool format ***\\n\";\n// Initialise all required variables\n$format = \"format\";\n$format1 = \"%b\";\n$format2 = \"%b %b\";\n$format3 = \"%b %b %b\";\n$arg1 = array(TRUE);\n$arg2 = array(TRUE,FALSE);\n$arg3 = array(TRUE,FALSE,TRUE);\nvar_dump( vsprintf($format1,$arg1) );\nvar_dump( vsprintf($format2,$arg2) );\nvar_dump( vsprintf($format3,$arg3) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
