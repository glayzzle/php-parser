// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/lstat_stat_variation21.phpt
  it("Test lstat() and stat() functions: usage variations - effects of truncate()", function () {
    expect(parser.parseCode("<?php\n/* test the effects of truncate() on stats of a file */\n$file_path = __DIR__;\nrequire \"$file_path/file.inc\";\n/* create temp file */\n$filename = \"$file_path/lstat_stat_variation21.tmp\";\n$fp = fopen($filename, \"w\");  // temp file\nfclose($fp);\n/* ftruncate the current file and check stat() on the file */\necho \"*** Testing stat() on file by truncating it to given size ***\\n\";\n$old_stat = stat($filename);\n// clear the cache\nclearstatcache();\nsleep(1);\n// opening file in r/w mode\n$file_handle = fopen($filename, \"r+\");\nvar_dump( ftruncate($file_handle, 512) );  // truncate it\nfclose($file_handle);\n$new_stat = stat($filename);\n// compare self stats\nvar_dump( compare_self_stat($old_stat) );\nvar_dump( compare_self_stat($new_stat) );\n// compare the stat\n$affected_members = array(7, 9, 10, 'size', 'mtime', 'ctime');\nvar_dump( compare_stats($old_stat, $new_stat, $affected_members, '!=') );\necho \"\\n--- Done ---\";\n?>")).toMatchSnapshot();
  });
});
