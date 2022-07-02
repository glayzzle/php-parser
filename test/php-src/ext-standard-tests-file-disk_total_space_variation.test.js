// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/disk_total_space_variation.phpt
  it("Testing disk_total_space() functions : Usage Variations.", function () {
    expect(parser.parseCode("<?php\n$file_path = __DIR__;\necho \"*** Testing with a directory ***\\n\";\nvar_dump( disk_total_space($file_path.\"/..\") );\necho \"\\nTesting for the return type ***\\n\";\n$return_value = disk_total_space($file_path);\nvar_dump( is_float($return_value) );\necho \"\\n*** Testing with different directory combinations ***\";\n$dir = \"/disk_total_space\";\nmkdir($file_path.$dir);\n$dirs_arr = array(\n  \".\",\n  $file_path.$dir,\n  $file_path.\"/.\".$dir,\n  /* Testing a file trailing slash */\n  $file_path.\"\".$dir.\"/\",\n  $file_path.\"/.\".$dir.\"/\",\n  /* Testing file with double trailing slashes */\n  $file_path.$dir.\"//\",\n  $file_path.\"/.\".$dir.\"//\",\n  $file_path.\"/./\".$dir.\"//\",\n  /* Testing Binary safe */\n  $file_path.$dir.chr(0),\n  $file_path.\"/.\".$dir.chr(0),\n  \".\".chr(0).$file_path.$dir,\n  \".\".chr(0).$file_path.$dir.chr(0)\n);\n$count = 1;\n/* loop through to test each element the above array */\nforeach($dirs_arr as $dir1) {\n  echo \"\\n-- Iteration $count --\\n\";\n  try {\n    var_dump( disk_total_space( $dir1 ) );\n  } catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n  }\n  $count++;\n}\necho \"*** Testing with Binary Input ***\\n\";\nvar_dump( disk_total_space(b\"$file_path\") );\necho\"\\n--- Done ---\";\n?>")).toMatchSnapshot();
  });
});
