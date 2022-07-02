// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/lstat_stat_variation19.phpt
  it("Test lstat() and stat() functions: usage variations - dir/file names in array", function () {
    expect(parser.parseCode("<?php\n/* test for stats of dir/file when their names are stored in an array */\n$file_path = __DIR__;\nrequire \"$file_path/file.inc\";\n/* create temp file, link and directory */\n@rmdir(\"$file_path/lstat_stat_variation19\");  // ensure that dir doesn't exists\nmkdir(\"$file_path/lstat_stat_variation19\");  // temp dir\n$fp = fopen(\"$file_path/lstat_stat_variation19.tmp\", \"w\");  // temp file\nfclose($fp);\necho \"*** Testing stat() with filename & directory name stored inside an array ***\\n\";\n// array with default numeric index\n$names = array(\n  \"$file_path/lstat_stat_variation19.tmp\",\n  \"$file_path/lstat_stat_variation19\"\n);\n//array with string key index\n$names_with_key = array (\n  'file' => \"$file_path/lstat_stat_variation19.tmp\",\n  \"dir\" => \"$file_path/lstat_stat_variation19\"\n);\necho \"\\n-- Testing stat() on filename stored inside an array --\\n\";\nvar_dump( stat($names[0]) ); // values stored with numeric index\nvar_dump( stat($names_with_key['file']) ); // value stored with string key\necho \"\\n-- Testing stat() on dir name stored inside an array --\\n\";\nvar_dump( stat($names[1]) ); // values stored with numeric index\nvar_dump( stat($names_with_key[\"dir\"]) ); // value stored with string key\necho \"\\n--- Done ---\";\n?>")).toMatchSnapshot();
  });
});
