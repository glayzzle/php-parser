// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fileinode_variation3.phpt
  it("Test fileinode() function: usage variations - diff. path notations", function () {
    expect(parser.parseCode("<?php\n/* Passing file names with different notations, using slashes, wild-card chars */\n$file_path = __DIR__;\necho \"*** Testing fileinode() with different notations of file names ***\\n\";\n$dir_name = $file_path.\"/fileinode_variation3\";\nmkdir($dir_name);\n$file_handle = fopen($dir_name.\"/fileinode_variation3.tmp\", \"w\");\nfclose($file_handle);\n$files_arr = array(\n  \"/fileinode_variation3/fileinode_variation3.tmp\",\n  /* Testing a file trailing slash */\n  \"/fileinode_variation3/fileinode_variation3.tmp/\",\n  /* Testing file with double slashes */\n  \"/fileinode_variation3//fileinode_variation3.tmp\",\n  \"//fileinode_variation3//fileinode_variation3.tmp\",\n  \"/fileinode_variation3/*.tmp\",\n  \"fileinode_variation3/fileinode*.tmp\",\n  /* Testing Binary safe */\n  \"/fileinode_variation3/fileinode_variation3.tmp\".chr(0),\n  \"/fileinode_variation3/fileinode_variation3.tmp\\0\"\n);\n$count = 1;\n/* loop through to test each element in the above array */\nforeach($files_arr as $file) {\n  echo \"- Iteration $count -\\n\";\n  try {\n    var_dump( fileinode( $file_path.\"/\".$file ) );\n  } catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n  }\n  clearstatcache();\n  $count++;\n}\necho \"\\n*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
