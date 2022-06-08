// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/vfprintf_basic6.phpt
  it("Test vfprintf() function : basic functionality - exponential format", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing vfprintf() : basic functionality - using exponential format ***\\n\";\n// Initialise all required variables\n$format = \"format\";\n$format1 = \"%e\";\n$format2 = \"%e %e\";\n$format3 = \"%e %e %e\";\n$arg1 = array(1000);\n$arg2 = array(1000,2000);\n$arg3 = array(1000,2000,3000);\n/* creating dumping file */\n$data_file = __DIR__ . '/vfprintf_basic6.txt';\nif (!($fp = fopen($data_file, 'wt')))\n   return;\nvfprintf($fp, $format1,$arg1);\nfprintf($fp, \"\\n\");\nvfprintf($fp, $format2,$arg2);\nfprintf($fp, \"\\n\");\nvfprintf($fp, $format3,$arg3);\nfprintf($fp, \"\\n\");\nfclose($fp);\nprint_r(file_get_contents($data_file));\nunlink($data_file);\n?>")).toMatchSnapshot();
  });
});
