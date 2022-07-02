// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/lstat_stat_variation15.phpt
  it("Test lstat() and stat() functions: usage variations - effects changing permissions of link", function () {
    expect(parser.parseCode("<?php\n/* test the effects on stats by changing permissions of link */\n$file_path = __DIR__;\nrequire \"$file_path/file.inc\";\n$filename = \"$file_path/lstat_stat_variation15.tmp\";\n$fp = fopen($filename, \"w\");  // temp file\nfclose($fp);\n// temp link\n$linkname = \"$file_path/lstat_stat_variation15_link.tmp\";\nsymlink($filename, $linkname);\n// checking lstat() and stat() on links\necho \"*** Testing lstat() on a link after changing its access permission ***\\n\";\nclearstatcache();\n$old_stat = lstat($linkname);\nvar_dump( chmod($linkname, 0777) );\n// clear the stat\nclearstatcache();\nsleep(2);\n$new_stat = lstat($linkname);\n// compare self stats\nvar_dump( compare_self_stat($old_stat) );\nvar_dump( compare_self_stat($new_stat) );\n// compare the stat\nvar_dump( compare_stats($old_stat, $new_stat, $all_stat_keys, \"==\") );\necho \"\\n--- Done ---\";\n?>")).toMatchSnapshot();
  });
});
