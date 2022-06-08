// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/lstat_stat_variation17.phpt
  it("Test lstat() and stat() functions: usage variations - effects changing permissions of dir", function () {
    expect(parser.parseCode("<?php\n/* test the effects on stats by changing permissions of a dir */\n$file_path = __DIR__;\nrequire \"$file_path/file.inc\";\n// checking stat() on directory\necho \"*** Testing lstat() on a dir after changing its access permission ***\\n\";\n$dirname = \"$file_path/lstat_stat_variation17\";\nmkdir($dirname);\n$old_stat = stat($dirname);\nsleep(1);\nvar_dump( chmod($dirname, 0777) );\n// clear the stat\nclearstatcache();\n$new_stat = stat($dirname);\n// compare self stats\nvar_dump( compare_self_stat($old_stat) );\nvar_dump( compare_self_stat($new_stat) );\n// compare the stat\n$affected_members = array(2, 10, 'mode', 'ctime');\nvar_dump( compare_stats($old_stat, $new_stat, $affected_members, \"!=\") );\necho \"\\n--- Done ---\";\n?>")).toMatchSnapshot();
  });
});
