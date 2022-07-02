// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/vfprintf_basic8.phpt
  it("Test vfprintf() function : basic functionality - octal format", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing vfprintf() : basic functionality - using octal format ***\\n\";\n// Initialise all required variables\n$format = \"format\";\n$format1 = \"%o\";\n$format2 = \"%o %o\";\n$format3 = \"%o %o %o\";\n$arg1 = array(021);\n$arg2 = array(021,0347);\n$arg3 = array(021,0347,0567);\n/* creating dumping file */\n$data_file = __DIR__ . '/vfprintf_basic8.txt';\nif (!($fp = fopen($data_file, 'wt')))\n   return;\nvfprintf($fp, $format1,$arg1);\nfprintf($fp, \"\\n\");\nvfprintf($fp, $format2,$arg2);\nfprintf($fp, \"\\n\");\nvfprintf($fp, $format3,$arg3);\nfprintf($fp, \"\\n\");\nfclose($fp);\nprint_r(file_get_contents($data_file));\nunlink($data_file);\n?>")).toMatchSnapshot();
  });
});
