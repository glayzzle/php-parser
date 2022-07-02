// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/lstat_stat_variation11.phpt
  it("Test lstat() and stat() functions: usage variations - effect of is_file()", function () {
    expect(parser.parseCode("<?php\n$file_path = __DIR__;\nrequire \"$file_path/file.inc\";\n/* test the effects of is_file() on stats of a file */\n/* create temp file */\n$filename = \"$file_path/lstat_stat_variation11.tmp\";\n$fp = fopen($filename, \"w\");  // temp file\nfclose($fp);\n// is_file() on a file\necho \"*** Testing stat() on a file after using is_file() on it ***\\n\";\n$old_stat = stat($filename);\n// clear the stat\nclearstatcache();\nsleep(1);\nvar_dump( is_file($filename) );\n$new_stat = stat($filename);\n// compare self stats\nvar_dump( compare_self_stat($old_stat) );\nvar_dump( compare_self_stat($new_stat) );\n// compare the stat\nvar_dump( compare_stats($old_stat, $new_stat, $all_stat_keys) );\n// clear the stat\nclearstatcache();\necho \"\\n--- Done ---\";\n?>")).toMatchSnapshot();
  });
});
