// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/lstat_stat_variation8.phpt
  it("Test lstat() and stat() functions: usage variations - creating file/subdir", function () {
    expect(parser.parseCode("<?php\n$file_path = __DIR__;\nrequire \"$file_path/file.inc\";\n/* test the effects on stats with creating file/subdir in a dir\n*/\n/* create temp file */\nmkdir(\"$file_path/lstat_stat_variation8/\");  // temp dir\n// creating and deleting subdir and files in the dir\necho \"*** Testing stat() on dir after subdir and file is created in it ***\\n\";\n$dirname = \"$file_path/lstat_stat_variation8\";\n$old_stat = stat($dirname);\nclearstatcache();\nsleep(1);\nmkdir(\"$dirname/lstat_stat_variation8_subdir\");\n$file_handle = fopen(\"$dirname/lstat_stat_variation8a.tmp\", \"w\");\nfclose($file_handle);\n$new_stat = stat($dirname);\n// compare self stats\nvar_dump( compare_self_stat($old_stat) );\nvar_dump( compare_self_stat($new_stat) );\n// compare the stat\n$affected_members = array(9, 10, 'mtime', 'ctime');\nclearstatcache();\nvar_dump(compare_stats($old_stat, $new_stat, $affected_members, \"<\"));\necho \"\\n--- Done ---\";\n?>")).toMatchSnapshot();
  });
});
