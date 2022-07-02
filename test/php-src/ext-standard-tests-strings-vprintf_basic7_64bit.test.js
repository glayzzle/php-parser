// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/vprintf_basic7_64bit.phpt
  it("Test vprintf() function : basic functionality - unsigned format", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing vprintf() : basic functionality - using unsigned format ***\\n\";\n// Initialise all required variables\n$format = \"format\";\n$format1 = \"%u\";\n$format2 = \"%u %u\";\n$format3 = \"%u %u %u\";\n$arg1 = array(-1111);\n$arg2 = array(-1111,-1234567);\n$arg3 = array(-1111,-1234567,-2345432);\n$result = vprintf($format1,$arg1);\necho \"\\n\";\nvar_dump($result);\n$result = vprintf($format2,$arg2);\necho \"\\n\";\nvar_dump($result);\n$result = vprintf($format3,$arg3);\necho \"\\n\";\nvar_dump($result);\n?>")).toMatchSnapshot();
  });
});
