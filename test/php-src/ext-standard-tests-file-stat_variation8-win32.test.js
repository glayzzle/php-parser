// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/stat_variation8-win32.phpt
  it("Test stat() functions: usage variations - effects of truncate()", function () {
    expect(parser.parseCode("<?php\n/* test the effects of truncate() on stats of file */\n$file_path = __DIR__;\nrequire \"$file_path/file.inc\";\n/* create temp file and directory */\n$filename = \"$file_path/stat_variation8.tmp\";\n$file_handle = fopen($filename, \"w\");  // temp file\nfclose($file_handle);\necho \"\\n*** Testing stat(): on file by truncating it to given size ***\\n\";\n// create temp file\n$file_handle = fopen($filename, \"w\");\nfclose($file_handle);\nclearstatcache(true, $filename);\n$old_stat = stat($filename);\n// clear the cache\nsleep(1);\n// opening file in r/w mode\n$file_handle = fopen($filename, \"r+\");\nvar_dump( ftruncate($file_handle, 512) );  // truncate it\nfclose($file_handle);\nclearstatcache(true, $filename);\n$new_stat = stat($filename);\n// compare self stats\nvar_dump( compare_self_stat($old_stat) );\nvar_dump( compare_self_stat($new_stat) );\n// compare the stat\n$affected_members = array(7, 9, 'size', 'mtime');\nvar_dump( compare_stats($old_stat, $new_stat, $affected_members, '!=') );\n// clear the stat\nclearstatcache(true, $filename);  // clear previous size value in cache\necho \"\\n*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
