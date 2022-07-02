// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/lstat_stat_variation4.phpt
  it("Test lstat() and stat() functions: usage variations - effects of touch() on file", function () {
    expect(parser.parseCode("<?php\n/* test the effects of touch() on stats of file */\n$file_path = __DIR__;\nrequire \"$file_path/file.inc\";\n/* create temp file  */\n$file_name = \"$file_path/lstat_stat_variation4.tmp\";\n$fp = fopen($file_name, \"w\");  // temp file\nfclose($fp);\n// touch a file check stat, there should be difference in atime\necho \"*** Testing stat() for file after using touch() on the file ***\\n\";\n$old_stat = stat($file_name);\n// clear the cache\nclearstatcache();\nsleep(1);\nvar_dump( touch($file_name) );\n$new_stat = stat($file_name);\n// compare self stats\nvar_dump( compare_self_stat($old_stat) );\nvar_dump( compare_self_stat($new_stat) );\n// compare the stat\n$affected_members = array(8, 'atime');\nvar_dump( compare_stats($old_stat, $new_stat, $affected_members, \"<\") );\n// clear the cache\nclearstatcache();\necho \"\\n--- Done ---\";\n?>")).toMatchSnapshot();
  });
});
