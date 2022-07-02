// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/lstat_stat_variation7.phpt
  it("Test lstat() and stat() functions: usage variations - writing data into file", function () {
    expect(parser.parseCode("<?php\n$file_path = __DIR__;\nrequire \"$file_path/file.inc\";\n/* test the effects on stats with writing data into a  file */\n$file_name = \"$file_path/lstat_stat_variation7.tmp\";\n$fp = fopen($file_name, \"w\");  // temp file\nfclose($fp);\n// writing to an empty file\necho \"*** Testing stat() on file after data is written in it ***\\n\";\n$fh = fopen($file_name,\"w\");\n$old_stat = stat($file_name);\nclearstatcache();\n$blksize = PHP_OS_FAMILY === 'Windows' ? 4096 : $old_stat['blksize'];\nfwrite($fh, str_repeat(\"Hello World\", $blksize));\nfclose($fh);\n$new_stat = stat($file_name);\n// compare self stats\nvar_dump( compare_self_stat($old_stat) );\nvar_dump( compare_self_stat($new_stat) );\n// compare the stats\n$comp_arr = array(7, 'size');\nvar_dump(compare_stats($old_stat, $new_stat, $comp_arr, \"<\"));\nclearstatcache();\necho \"\\n--- Done ---\";\n?>")).toMatchSnapshot();
  });
});
