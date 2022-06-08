// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/lstat_stat_variation1.phpt
  it("Test lstat() and stat() functions: usage variations - effects of rename() on file", function () {
    expect(parser.parseCode("<?php\n/* test the effects of rename() on stats of file */\n$file_path = __DIR__;\nrequire \"$file_path/file.inc\";\n/* create temp file */\n$fp = fopen(\"$file_path/lstat_stat_variation1.tmp\", \"w\");  // temp file\nfclose($fp);\n// renaming a file and check stat\necho \"*** Testing stat() for files after being renamed ***\\n\";\n$file_path = __DIR__;\n$old_filename = \"$file_path/lstat_stat_variation1.tmp\";\n$new_filename = \"$file_path/lstat_stat_variation1a.tmp\";\n$old_stat = stat($old_filename);\nclearstatcache();\nvar_dump( rename($old_filename, $new_filename) );\n$new_stat = stat($new_filename);\n// compare the self stat\nvar_dump( compare_self_stat($old_stat) );\nvar_dump( compare_self_stat($new_stat) );\n// compare the two stats\nvar_dump( compare_stats($old_stat, $old_stat, $all_stat_keys) );\n// clear the cache\nclearstatcache();\necho \"\\n--- Done ---\";\n?>")).toMatchSnapshot();
  });
});
