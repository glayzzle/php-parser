// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/vfprintf_basic9.phpt
  it("Test vfprintf) function : basic functionality - hexadecimal format", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing vfprintf) : basic functionality - using hexadecimal format ***\\n\";\n// Initialising different format strings\n$format = \"format\";\n$format1 = \"%x\";\n$format2 = \"%x %x\";\n$format3 = \"%x %x %x\";\n$format11 = \"%X\";\n$format22 = \"%X %X\";\n$format33 = \"%X %X %X\";\n$arg1 = array(11);\n$arg2 = array(11,132);\n$arg3 = array(11,132,177);\n/* creating dumping file */\n$data_file = __DIR__ . '/vfprintf_basic9.txt';\nif (!($fp = fopen($data_file, 'wt')))\n   return;\nvfprintf($fp, $format1, $arg1);\nfprintf($fp, \"\\n\");\nvfprintf($fp, $format11, $arg1);\nfprintf($fp, \"\\n\");\nvfprintf($fp, $format2, $arg2);\nfprintf($fp, \"\\n\");\nvfprintf($fp, $format22, $arg2);\nfprintf($fp, \"\\n\");\nvfprintf($fp, $format3, $arg3);\nfprintf($fp, \"\\n\");\nvfprintf($fp, $format33, $arg3);\nfprintf($fp, \"\\n\");\nfclose($fp);\nprint_r(file_get_contents($data_file));\nunlink($data_file);\n?>")).toMatchSnapshot();
  });
});
