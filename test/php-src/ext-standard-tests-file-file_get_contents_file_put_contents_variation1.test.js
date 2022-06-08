// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/file_get_contents_file_put_contents_variation1.phpt
  it("Test file_get_contents() and file_put_contents() functions : usage variations - all arguments", function () {
    expect(parser.parseCode("<?php\n/* Testing variation in all argument values */\n$file_path = __DIR__;\ninclude($file_path.\"/file.inc\");\necho \"*** Testing with variations in the arguments values ***\\n\";\n$buffer_types = array(\"text\", \"numeric\", \"text_with_new_line\", \"alphanumeric\");\nforeach( $buffer_types as $type) {\n  fill_buffer($buffer, $type, 100);\n  file_put_contents( $file_path.\"/file_put_contents_variation1.tmp\", $buffer);\n  var_dump( file_get_contents($file_path.\"/file_put_contents_variation1.tmp\", 0) );\n  var_dump( file_get_contents($file_path.\"/file_put_contents_variation1.tmp\", 1) );\n  var_dump( file_get_contents($file_path.\"/file_put_contents_variation1.tmp\", 0, NULL, 5) );\n  var_dump( file_get_contents($file_path.\"/file_put_contents_variation1.tmp\", 1, NULL, 5) );\n  var_dump( file_get_contents($file_path.\"/file_put_contents_variation1.tmp\", 0, NULL, 5, 20) );\n  var_dump( file_get_contents($file_path.\"/file_put_contents_variation1.tmp\", 1, NULL, 5, 20) );\n}\necho \"--- Done ---\";\n?>")).toMatchSnapshot();
  });
});
