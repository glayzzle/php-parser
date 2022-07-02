// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/lstat_stat_variation10.phpt
  it("Test lstat() and stat() functions: usage variations - effects of is_dir()", function () {
    expect(parser.parseCode("<?php\n/* test the effects of is_dir() on stats of a dir */\n$file_path = __DIR__;\nrequire \"$file_path/file.inc\";\n/* create temp file, link and directory */\n$dirname = \"$file_path/lstat_stat_variation10\";\nmkdir($dirname);  // temp dir\n// is_dir() on a directory\necho \"*** Testing stat() on directory after using is_dir() on it ***\\n\";\n$old_stat = stat($dirname);\n// clear the cache\nclearstatcache();\nsleep(1);\nvar_dump( is_dir($dirname) );\n$new_stat = stat($dirname);\n// compare self stats\nvar_dump( compare_self_stat($old_stat) );\nvar_dump( compare_self_stat($new_stat) );\n// activity from background processes may unexpectedly update the atime\n// so don't include \"atime\" (or 8, which also means atime)\n$compare_keys = array(0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12,\n                      \"dev\", \"ino\", \"mode\", \"nlink\", \"uid\", \"gid\",\n                      \"rdev\", \"size\", \"mtime\", \"ctime\",\n                      \"blksize\", \"blocks\");\n// compare the stat\nvar_dump( compare_stats($old_stat, $new_stat, $compare_keys) );\necho \"\\n--- Done ---\";\n?>")).toMatchSnapshot();
  });
});
