// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/lstat_stat_variation16.phpt
  it("Test lstat() and stat() functions: usage variations - effects changing permissions of file", function () {
    expect(parser.parseCode("<?php\n/* test the effects on stats with changing permissions of file */\n$file_path = __DIR__;\nrequire \"$file_path/file.inc\";\n$filename = \"$file_path/lstat_stat_variation16.tmp\";\n$fp = fopen($filename, \"w\");  // temp file\nfclose($fp);\n// checking stat() on file after changing its permission\necho \"*** Testing lstat() on a file after changing its access permission ***\\n\";\n$old_stat = stat($filename);\nsleep(1);\nvar_dump( chmod($filename, 0777) );\n// clear the stat\nclearstatcache();\n$new_stat = stat($filename);\n// compare self stats\nvar_dump( compare_self_stat($old_stat) );\nvar_dump( compare_self_stat($new_stat) );\n// compare the stat\n$affected_members = array(10, 'ctime');\nvar_dump( compare_stats($old_stat, $new_stat, $affected_members, \"!=\") );\necho \"\\n--- Done ---\";\n?>")).toMatchSnapshot();
  });
});
