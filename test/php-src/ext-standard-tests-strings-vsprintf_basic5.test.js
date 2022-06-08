// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/vsprintf_basic5.phpt
  it("Test vsprintf() function : basic functionality - char format", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing vsprintf() : basic functionality - using char format ***\\n\";\n// Initialise all required variables\n$format = \"format\";\n$format1 = \"%c\";\n$format2 = \"%c %c\";\n$format3 = \"%c %c %c\";\n$arg1 = array(65);\n$arg2 = array(65,66);\n$arg3 = array(65,66,67);\nvar_dump( vsprintf($format1,$arg1) );\nvar_dump( vsprintf($format2,$arg2) );\nvar_dump( vsprintf($format3,$arg3) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
