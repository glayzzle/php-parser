// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/fprintf_variation_001.phpt
  it("Test fprintf() function (variation - 1)", function () {
    expect(parser.parseCode("<?php\n$float_variation = array( \"%f\",\"%-f\", \"%+f\", \"%7.2f\", \"%-7.2f\", \"%07.2f\", \"%-07.2f\", \"%'#7.2f\" );\n$float_numbers = array( 0, 1, -1, 0.32, -0.32, 3.4. -3.4, 2.54, -2.54 );\n/* creating dumping file */\n$data_file = __DIR__ . '/fprintf_variation_001.txt';\nif (!($fp = fopen($data_file, 'wt')))\n   return;\n$counter = 1;\n/* float type variations */\nfprintf($fp, \"\\n*** Testing fprintf() with floats ***\\n\");\nforeach( $float_variation as $float_var ) {\n  fprintf( $fp, \"\\n-- Iteration %d --\\n\",$counter);\n  foreach( $float_numbers as $float_num ) {\n    fprintf( $fp, \"\\n\");\n    fprintf( $fp, $float_var, $float_num );\n  }\n  $counter++;\n}\nfclose($fp);\nprint_r(file_get_contents($data_file));\necho \"\\nDone\";\nunlink($data_file);\n?>")).toMatchSnapshot();
  });
});
