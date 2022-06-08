// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/fprintf_variation_002.phpt
  it("Test fprintf() function (variation - 2)", function () {
    expect(parser.parseCode("<?php\n$int_variation = array( \"%d\", \"%-d\", \"%+d\", \"%7.2d\", \"%-7.2d\", \"%07.2d\", \"%-07.2d\", \"%'#7.2d\" );\n$int_numbers = array( 0, 1, -1, 2.7, -2.7, 23333333, -23333333, \"1234\" );\n/* creating dumping file */\n$data_file = __DIR__ . '/fprintf_variation_002.txt';\nif (!($fp = fopen($data_file, 'wt')))\n   return;\n$counter = 1;\n/* integer type variations */\nfprintf($fp, \"\\n*** Testing fprintf() with integers ***\\n\");\nforeach( $int_variation as $int_var ) {\n  fprintf( $fp, \"\\n-- Iteration %d --\\n\",$counter);\n  foreach( $int_numbers as $int_num ) {\n    fprintf( $fp, \"\\n\");\n    fprintf( $fp, $int_var, $int_num );\n  }\n  $counter++;\n}\nfclose($fp);\nprint_r(file_get_contents($data_file));\necho \"\\nDone\";\nunlink($data_file);\n?>")).toMatchSnapshot();
  });
});
