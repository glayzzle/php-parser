// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/vfprintf_basic7_64bit.phpt
  it("Test vfprintf() function : basic functionality - unsigned format", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing vfprintf() : basic functionality - using unsigned format ***\\n\";\n// Initialise all required variables\n$format = \"format\";\n$format1 = \"%u\";\n$format2 = \"%u %u\";\n$format3 = \"%u %u %u\";\n$arg1 = array(-1111);\n$arg2 = array(-1111,-1234567);\n$arg3 = array(-1111,-1234567,-2345432);\n/* creating dumping file */\n$data_file = __DIR__ . '/vfprintf_basic7_64bit.txt';\nif (!($fp = fopen($data_file, 'wt')))\n   return;\nvfprintf($fp, $format1,$arg1);\nfprintf($fp, \"\\n\");\nvfprintf($fp, $format2,$arg2);\nfprintf($fp, \"\\n\");\nvfprintf($fp, $format3,$arg3);\nfprintf($fp, \"\\n\");\nfclose($fp);\nprint_r(file_get_contents($data_file));\nunlink($data_file);\n?>")).toMatchSnapshot();
  });
});
