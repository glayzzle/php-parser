// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/vsprintf_basic2.phpt
  it("Test vsprintf() function : basic functionality - integer format", function () {
    expect(parser.parseCode("<?php\n/*\n *  Testing vsprintf() : basic functionality - using integer format\n*/\necho \"*** Testing vsprintf() : basic functionality - using integer format ***\\n\";\n// Initialise all required variables\n$format = \"format\";\n$format1 = \"%d\";\n$format2 = \"%d %d\";\n$format3 = \"%d %d %d\";\n$arg1 = array(111);\n$arg2 = array(111,222);\n$arg3 = array(111,222,333);\nvar_dump( vsprintf($format1,$arg1) );\nvar_dump( vsprintf($format2,$arg2) );\nvar_dump( vsprintf($format3,$arg3) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
