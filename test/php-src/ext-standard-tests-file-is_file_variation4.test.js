// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/is_file_variation4.phpt
  it("Test is_file() function: usage variations - diff. path notations (Bug #42027)", function () {
    expect(parser.parseCode("<?php\n/* Passing file names with different notations, using slashes, wild-card chars */\n$file_path = __DIR__;\necho \"*** Testing is_file() with different notations of file names ***\\n\";\n$dir_name = $file_path.\"/is_file_variation4\";\nmkdir($dir_name);\n$file_handle = fopen($dir_name.\"/is_file_variation4.tmp\", \"w\");\nfclose($file_handle);\n$files_arr = array(\n  \"/is_file_variation4/is_file_variation4.tmp\",\n  /* Testing a file trailing slash */\n  \"/is_file_variation4/is_file_variation4.tmp/\",\n  /* Testing file with double slashes */\n  \"/is_file_variation4//is_file_variation4.tmp\",\n  \"//is_file_variation4//is_file_variation4.tmp\",\n  \"/is_file_variation4/*.tmp\",\n  \"is_file_variation4/is_file*.tmp\",\n  /* Testing Binary safe */\n  \"/is_file_variation4/is_file_variation4.tmp\".chr(0),\n  \"/is_file_variation4/is_file_variation4.tmp\\0\"\n);\n$count = 1;\n/* loop through to test each element in the above array */\nforeach($files_arr as $file) {\n  echo \"- Iteration $count -\\n\";\n  try {\n    var_dump( is_file( $file_path.\"/\".$file ) );\n  } catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n  }\n  clearstatcache();\n  $count++;\n}\necho \"\\n*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
