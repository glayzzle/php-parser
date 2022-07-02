// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/vfprintf_basic3.phpt
  it("Test vfprintf() function : basic functionality - float format", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing vfprintf() : basic functionality - using float format ***\\n\";\n// Initialise all required variables\n$format = \"format\";\n$format1 = \"%f\";\n$format2 = \"%f %f\";\n$format3 = \"%f %f %f\";\n$format11 = \"%F\";\n$format22 = \"%F %F\";\n$format33 = \"%F %F %F\";\n$arg1 = array(11.11);\n$arg2 = array(11.11,22.22);\n$arg3 = array(11.11,22.22,33.33);\n/* creating dumping file */\n$data_file = __DIR__ . '/vfprintf_basic3.txt';\nif (!($fp = fopen($data_file, 'wt')))\n   return;\nvfprintf($fp, $format1,$arg1);\nfprintf($fp, \"\\n\");\nvfprintf($fp,$format11,$arg1);\nfprintf($fp, \"\\n\");\nvfprintf($fp,$format2,$arg2);\nfprintf($fp, \"\\n\");\nvfprintf($fp,$format22,$arg2);\nfprintf($fp, \"\\n\");\nvfprintf($fp,$format3,$arg3);\nfprintf($fp, \"\\n\");\nvfprintf($fp, $format33,$arg3);\nfprintf($fp, \"\\n\");\nfclose($fp);\nprint_r(file_get_contents($data_file));\nunlink($data_file);\n?>")).toMatchSnapshot();
  });
});
