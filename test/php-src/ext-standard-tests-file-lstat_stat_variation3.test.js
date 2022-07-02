// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/lstat_stat_variation3.phpt
  it("Test lstat() and stat() functions: usage variations - effects of rename() on link", function () {
    expect(parser.parseCode("<?php\n/* test the effects of rename() on stats of link */\n$file_path = __DIR__;\nrequire \"$file_path/file.inc\";\n/* create temp file & link */\n$fp = fopen(\"$file_path/lstat_stat_variation3.tmp\", \"w\");  // temp file\nfclose($fp);\n// temp link\nsymlink(\"$file_path/lstat_stat_variation3.tmp\", \"$file_path/lstat_stat_variation_link3.tmp\");\n// renaming a link\necho \"*** Testing lstat() for link after being renamed ***\\n\";\n$old_linkname = \"$file_path/lstat_stat_variation_link3.tmp\";\n$new_linkname = \"$file_path/lstat_stat_variation_link3a.tmp\";\n$old_stat = lstat($old_linkname);\nclearstatcache();\nvar_dump( rename($old_linkname, $new_linkname) );\n$new_stat = lstat($new_linkname);\n// compare self stats\nvar_dump( compare_self_stat($old_stat) );\nvar_dump( compare_self_stat($new_stat) );\n// compare the two stats - all except ctime\n$keys_to_compare = array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12,\n                       \"dev\", \"ino\", \"mode\", \"nlink\", \"uid\", \"gid\",\n                       \"rdev\", \"size\", \"atime\", \"mtime\", \"blksize\", \"blocks\");\nvar_dump( compare_stats($old_stat, $new_stat, $keys_to_compare) );\n?>")).toMatchSnapshot();
  });
});
