// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/lstat_stat_variation2.phpt
  it("Test lstat() and stat() functions: usage variations - effects of rename() on dir", function () {
    expect(parser.parseCode("<?php\n/* test the effects of rename() on stats of dir */\n$file_path = __DIR__;\nrequire(\"file.inc\");\n/* create temp directory */\nmkdir(\"$file_path/lstat_stat_variation1/\");  // temp dir\n// renaming a directory and check stat\necho \"*** Testing stat() for directory after being renamed ***\\n\";\n$old_dirname = \"$file_path/lstat_stat_variation1\";\n$new_dirname = \"$file_path/lstat_stat_variation1a\";\n$old_stat = stat($old_dirname);\nclearstatcache();\nvar_dump( rename($old_dirname, $new_dirname) );\n$new_stat = stat($new_dirname);\n// compare self stats\nvar_dump( compare_self_stat($old_stat) );\nvar_dump( compare_self_stat($new_stat) );\n// compare the two stats - all except ctime\n$keys_to_compare = array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12,\n                       \"dev\", \"ino\", \"mode\", \"nlink\", \"uid\", \"gid\",\n                       \"rdev\", \"size\", \"atime\", \"mtime\", \"blksize\", \"blocks\");\nvar_dump( compare_stats($old_stat, $new_stat, $keys_to_compare) );\n// clear the cache\nclearstatcache();\necho \"\\n--- Done ---\";\n?>")).toMatchSnapshot();
  });
});
