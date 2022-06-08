// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/stat_variation2-win32.phpt
  it("Test stat() functions: usage variations - effects of writing to file", function () {
    expect(parser.parseCode("<?php\n/* test the effects of writing to a file on the stats of the file */\n$file_path = __DIR__;\nrequire \"$file_path/file.inc\";\n$filename = \"$file_path/stat_variation2.tmp\";\n$file_handle = fopen($filename, \"w\");  // temp file\nfclose($file_handle);\necho \"*** Testing stat(): writing to a file ***\\n\";\n// writing to an empty file\necho \"-- Testing stat() on file after data is written in it --\\n\";\n$old_stat = stat($filename);\nclearstatcache();\nsleep(1);\n$file_handle = fopen($filename, \"w\");  // temp file\nfwrite($file_handle, \"Hello World\");\nfclose($file_handle);\n$new_stat = stat($filename);\n// compare self stats\nvar_dump( compare_self_stat($old_stat) );\nvar_dump( compare_self_stat($new_stat) );\n// compare the stats\n$comp_arr = array(7, 'size');\nvar_dump(compare_stats($old_stat, $new_stat, $comp_arr, \"<\"));\nclearstatcache();\necho \"\\n*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
