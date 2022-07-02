// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fileowner_variation3.phpt
  it("Test fileowner() function: usage variations - diff. path notations", function () {
    expect(parser.parseCode("<?php\n/* Passing file names with different notations, using slashes, wild-card chars */\n$file_path = __DIR__;\necho \"*** Testing fileowner() with different notations of file names ***\\n\";\n$dir_name = $file_path.\"/fileowner_variation3\";\nmkdir($dir_name);\n$file_handle = fopen($dir_name.\"/fileowner_variation3.tmp\", \"w\");\nfclose($file_handle);\n$files_arr = array(\n  \"/fileowner_variation3/fileowner_variation3.tmp\",\n  /* Testing a file trailing slash */\n  \"/fileowner_variation3/fileowner_variation3.tmp/\",\n  /* Testing file with double slashes */\n  \"/fileowner_variation3//fileowner_variation3.tmp\",\n  \"//fileowner_variation3//fileowner_variation3.tmp\",\n  \"/fileowner_variation3/*.tmp\",\n  \"fileowner_variation3/fileowner*.tmp\",\n  /* Testing Binary safe */\n  \"/fileowner_variation3/fileowner_variation3.tmp\".chr(0),\n  \"/fileowner_variation3/fileowner_variation3.tmp\\0\"\n);\n$count = 1;\n/* loop through to test each element in the above array */\nforeach($files_arr as $file) {\n  echo \"- Iteration $count -\\n\";\n  try {\n    var_dump( fileowner( $file_path.\"/\".$file ) );\n  } catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n  }\n  clearstatcache();\n  $count++;\n}\necho \"\\n*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
