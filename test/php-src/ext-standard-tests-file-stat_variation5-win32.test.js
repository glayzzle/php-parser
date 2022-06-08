// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/stat_variation5-win32.phpt
  it("Test stat() functions: usage variations - file opened in read/write mode", function () {
    expect(parser.parseCode("<?php\n/* test the stats of file opened in write mode and then same in read mode */\n$file_path = __DIR__;\nrequire \"$file_path/file.inc\";\n$file_handle = fopen(\"$file_path/stat_variation5.tmp\", \"w\");  // temp file\nfclose($file_handle);\necho \"\\n*** Testing stat(): on a file with read/write permission ***\\n\";\n$filename = \"$file_path/stat_variation5.tmp\";\n$file_handle = fopen($filename, \"w\");  // create file\nfclose($file_handle);\n$old_stat = stat($filename);\n// clear the stat\nclearstatcache();\nsleep(1);\n// opening file again in read mode\n$file_handle = fopen($filename, \"r\");  // read file\nfclose($file_handle);\n$new_stat = stat($filename);\n// compare self stats\nvar_dump( compare_self_stat($old_stat) );\nvar_dump( compare_self_stat($new_stat) );\n// compare the stat\n$affected_members = array(10, 'ctime');\nvar_dump( compare_stats($old_stat, $new_stat, $affected_members, \"==\") );\n// clear the stat\nclearstatcache();\necho \"\\n*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
