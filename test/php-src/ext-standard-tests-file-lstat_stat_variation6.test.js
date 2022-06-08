// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/lstat_stat_variation6.phpt
  it("Test lstat() and stat() functions: usage variations - effects of touch() on link", function () {
    expect(parser.parseCode("<?php\n/* test the effects of touch() on stats of link */\n$file_path = __DIR__;\nrequire \"$file_path/file.inc\";\n/* create temp file, link and directory */\n$file_name = \"$file_path/lstat_stat_variation6.tmp\";\n$fp = fopen($file_name, \"w\");  // temp file\nfclose($fp);\n$link_name = \"$file_path/lstat_stat_variation_link6.tmp\";\nsymlink($file_name, $link_name);  // temp link\n// touch a link, check stat, there should be difference in atime\necho \"*** Testing lstat() for link after using touch() on the link ***\\n\";\n$old_stat = lstat($link_name);\nsleep(2);\n// clear the cache\nclearstatcache();\nvar_dump( touch($link_name) );\n$new_stat = stat($file_name);\n// compare self stats\nvar_dump( compare_self_stat($old_stat) );\nvar_dump( compare_self_stat($new_stat) );\n// compare the stat\n$affected_members = array(8, 'atime');\nvar_dump( compare_stats($old_stat, $new_stat, $affected_members, \"<\") );\n// clear the stat\nclearstatcache();\necho \"\\n--- Done ---\";\n?>")).toMatchSnapshot();
  });
});
