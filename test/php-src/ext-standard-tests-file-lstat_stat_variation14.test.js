// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/lstat_stat_variation14.phpt
  it("Test lstat() and stat() functions: usage variations - hardlink", function () {
    expect(parser.parseCode("<?php\n/* test the effects of is_link() on stats of hard link */\n$file_path = __DIR__;\nrequire \"$file_path/file.inc\";\n/* create temp file & link */\n$filename = \"$file_path/lstat_stat_variation14.tmp\";\n$fp = fopen($filename, \"w\");  // temp file\nfclose($fp);\necho \"*** Checking lstat() and stat() on hard link ***\\n\";\n$linkname = \"$file_path/lstat_stat_variation14_hard.tmp\";\n//ensure that link doesn't exists\n@unlink($linkname);\n// create the link\nvar_dump( link($filename, $linkname) );\n$file_stat = stat($filename);\n$link_stat = lstat($linkname);\n// compare self stats\nvar_dump( compare_self_stat($file_stat) );\nvar_dump( compare_self_stat($link_stat) );\n// compare the stat\nvar_dump( compare_stats($file_stat, $link_stat, $all_stat_keys) );\n// clear the stat\nclearstatcache();\necho \"\\n--- Done ---\";\n?>")).toMatchSnapshot();
  });
});
