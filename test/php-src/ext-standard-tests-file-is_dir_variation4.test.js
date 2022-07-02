// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/is_dir_variation4.phpt
  it("Test is_dir() function: usage variations - diff. path notations", function () {
    expect(parser.parseCode("<?php\n/* Passing dir names with different notations, using slashes, wild-card chars */\n$file_path = __DIR__;\necho \"*** Testing is_dir() with different notations of dir names ***\";\n$dir_name = \"/is_dir_variation4\";\nmkdir($file_path.$dir_name);\n$dirs_arr = array(\n  \"is_dir_variation4\",\n  \"./is_dir_variation4\",\n  /* Testing a file trailing slash */\n  \"is_dir_variation4/\",\n  \"./is_dir_variation4/\",\n  /* Testing file with double trailing slashes */\n  \"is_dir_variation4//\",\n  \"./is_dir_variation4//\",\n  \".//is_dir_variation4//\",\n  \"is_dir_vari*\",\n  /* Testing Binary safe */\n  \"./is_dir_variation4/\".chr(0),\n  \"is_dir_variation4\\0\"\n);\n$count = 1;\n/* loop through to test each element the above array */\nforeach($dirs_arr as $dir) {\n  echo \"\\n-- Iteration $count --\\n\";\n  try {\n    var_dump( is_dir($file_path.\"/\".$dir ) );\n  } catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n  }\n  $count++;\n}\necho \"\\n*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
