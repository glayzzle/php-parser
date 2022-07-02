// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/lstat_stat_variation13.phpt
  it("Test lstat() and stat() functions: usage variations - file opened using w and r mode", function () {
    expect(parser.parseCode("<?php\n/* use stat on file created using \"w\" and \"r\" mode of fopen */\n$file_path = __DIR__;\nrequire \"$file_path/file.inc\";\n$filename = \"$file_path/lstat_stat_variation13.tmp\";\necho \"*** Checking stat() on a file opened using read/write mode ***\\n\";\n$file_handle = fopen($filename, \"w\");  // create file\nfclose($file_handle);\n$old_stat = stat($filename);\n// clear the stat\nclearstatcache();\nsleep(1);\n// opening file again in read mode\n$file_handle = fopen($filename, \"r\");  // read file\nfclose($file_handle);\n$new_stat = stat($filename);\n// compare self stats\nvar_dump( compare_self_stat($old_stat) );\nvar_dump( compare_self_stat($new_stat) );\n// compare the stat\nvar_dump( compare_stats($old_stat, $new_stat, $all_stat_keys) );\necho \"\\n--- Done ---\";\n?>")).toMatchSnapshot();
  });
});
