// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/lstat_stat_variation5.phpt
  it("Test lstat() and stat() functions: usage variations - effects of touch() on dir", function () {
    expect(parser.parseCode("<?php\n/* test the effects of touch() on stats of dir */\n$file_path = __DIR__;\nrequire \"$file_path/file.inc\";\n/* create temp directory */\n$dir_name = \"$file_path/lstat_stat_variation5\";\n@rmdir($dir_name);  //ensure that dir doesn't exists\nmkdir($dir_name);  // temp dir\n// touch a directory and check stat, there should be difference in atime\necho \"*** Testing stat() for directory after using touch() on the directory ***\\n\";\n$old_stat = stat($dir_name);\n// clear the cache\nclearstatcache();\nsleep(1);\nvar_dump( touch($dir_name) );\n$new_stat = stat($dir_name);\n// compare self stats\nvar_dump( compare_self_stat($old_stat) );\nvar_dump( compare_self_stat($new_stat) );\n// compare the stat\n$affected_members = array(8, 9, 10, 'atime', 'mtime', 'ctime');\nvar_dump( compare_stats($old_stat, $new_stat, $affected_members, \"<\") );\n// clear the cache\nclearstatcache();\necho \"\\n--- Done ---\";\n?>")).toMatchSnapshot();
  });
});
