// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/lstat_stat_variation18.phpt
  it("Test lstat() and stat() functions: usage variations - dir/file name stored in object", function () {
    expect(parser.parseCode("<?php\n/* test for stats of dir/file when their names are stored in objects */\n$file_path = __DIR__;\nrequire \"$file_path/file.inc\";\n/* create temp file and directory */\nmkdir(\"$file_path/lstat_stat_variation18/\");  // temp dir\n$fp = fopen(\"$file_path/lstat_stat_variation18.tmp\", \"w\");  // temp file\nfclose($fp);\necho \"*** Testing stat() with filename & directory name stored inside an object ***\\n\";\nclass names {\n  public $var_name;\n  public function __construct($name) {\n    $this->var_name = $name;\n  }\n}\n// directory name stored in an object\n$dir_name = new names(\"$file_path/lstat_stat_variation18\");\n// file name stored in an object\n$file_name = new names(\"$file_path/lstat_stat_variation18.tmp\");\necho \"\\n-- Testing stat() on filename stored inside an object --\\n\";\n// dump the stat returned value\nvar_dump( stat($file_name->var_name) );\necho \"\\n-- Testing stat() on directory name stored inside an object --\\n\";\n// dump the stat returned value\nvar_dump( stat($dir_name->var_name) );\necho \"\\n--- Done ---\";\n?>")).toMatchSnapshot();
  });
});
