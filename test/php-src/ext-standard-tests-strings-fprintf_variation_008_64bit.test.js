// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/fprintf_variation_008_64bit.phpt
  it("Test fprintf() function (variation - 8)", function () {
    expect(parser.parseCode("<?php\n$int_variation = array( \"%d\", \"%-d\", \"%+d\", \"%7.2d\", \"%-7.2d\", \"%07.2d\", \"%-07.2d\", \"%'#7.2d\" );\n$int_numbers = array( 0, 1, -1, 2.7, -2.7, 23333333, -23333333, \"1234\" );\n/* creating dumping file */\n$data_file = __DIR__ . '/fprintf_variation_008_64bit.txt';\nif (!($fp = fopen($data_file, 'wt')))\n   return;\n/* hexadecimal type variations */\nfprintf($fp, \"\\n*** Testing fprintf() for hexadecimals ***\\n\");\nforeach( $int_numbers as $hexa_num ) {\n fprintf( $fp, \"\\n\");\n fprintf( $fp, \"%x\", $hexa_num );\n}\nfclose($fp);\nprint_r(file_get_contents($data_file));\necho \"\\nDone\";\nunlink($data_file);\n?>")).toMatchSnapshot();
  });
});
