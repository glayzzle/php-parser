// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/fprintf_variation_003.phpt
  it("Test fprintf() function (variation - 3)", function () {
    expect(parser.parseCode("<?php\n$int_numbers = array( 0, 1, -1, 2.7, -2.7, 23333333, -23333333, \"1234\" );\n/* creating dumping file */\n$data_file = __DIR__ . '/fprintf_variation_003.txt';\nif (!($fp = fopen($data_file, 'wt')))\n   return;\n/* binary type variations */\nfprintf($fp, \"\\n*** Testing fprintf() with binary ***\\n\");\nforeach( $int_numbers as $bin_num ) {\n  fprintf( $fp, \"\\n\");\n  fprintf( $fp, \"%b\", $bin_num );\n}\nfclose($fp);\nprint_r(file_get_contents($data_file));\necho \"\\nDone\";\nunlink($data_file);\n?>")).toMatchSnapshot();
  });
});
