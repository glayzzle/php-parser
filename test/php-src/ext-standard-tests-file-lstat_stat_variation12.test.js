// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/lstat_stat_variation12.phpt
  it("Test lstat() and stat() functions: usage variations - effects of is_link()", function () {
    expect(parser.parseCode("<?php\n/* test the effects of is_link() on stats of link */\n$file_path = __DIR__;\nrequire \"$file_path/file.inc\";\n/* create temp file, link */\n$filename = \"$file_path/lstat_stat_variation12.tmp\";\n$fp = fopen($filename, \"w\");  // temp file\nfclose($fp);\n$linkname = \"$file_path/lstat_stat_variation12_link.tmp\";\nsymlink($filename, $linkname); // temp link\n// is_link() on a link\necho \"*** Testing stat() on a link after using is_link() on it ***\\n\";\n$linkname = \"$file_path/lstat_stat_variation12_link.tmp\";\n$old_stat = lstat($linkname);\n// clear the stat\nclearstatcache();\nsleep(1);\nvar_dump( is_link($linkname) );\n$new_stat = lstat($linkname);\n// compare self stats\nvar_dump( compare_self_stat($old_stat) );\nvar_dump( compare_self_stat($new_stat) );\n// compare the stat\nvar_dump( compare_stats($old_stat, $new_stat, $all_stat_keys) );\n// clear the stat\nclearstatcache();\necho \"\\n--- Done ---\";\n?>")).toMatchSnapshot();
  });
});
