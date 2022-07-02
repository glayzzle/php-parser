// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/vfprintf_basic2.phpt
  it("Test vfprintf() function : basic functionality - integer format", function () {
    expect(parser.parseCode("<?php\n/*\n *  Testing vfprintf() : basic functionality - using integer format\n*/\necho \"*** Testing vfprintf() : basic functionality - using integer format ***\\n\";\n// Initialise all required variables\n$format = \"format\";\n$format1 = \"%d\";\n$format2 = \"%d %d\";\n$format3 = \"%d %d %d\";\n$arg1 = array(111);\n$arg2 = array(111,222);\n$arg3 = array(111,222,333);\n/* creating dumping file */\n$data_file = __DIR__ . '/vfprintf_basic2.txt';\nif (!($fp = fopen($data_file, 'wt')))\n   return;\nvfprintf($fp, $format1, $arg1);\nfprintf($fp, \"\\n\");\nvfprintf($fp, $format2, $arg2);\nfprintf($fp, \"\\n\");\nvfprintf($fp, $format3, $arg3);\nfprintf($fp, \"\\n\");\nfclose($fp);\nprint_r(file_get_contents($data_file));\nunlink($data_file);\n?>")).toMatchSnapshot();
  });
});
