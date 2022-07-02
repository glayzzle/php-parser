// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/lstat_stat_basic.phpt
  it("Test lstat() & stat() functions: basic functionality", function () {
    expect(parser.parseCode("<?php\n$file_path = __DIR__;\nrequire(\"$file_path/file.inc\");\necho \"*** Testing lstat() & stat() : basic functionality ***\\n\";\n/* creating temp directory and file */\n// creating dir\n$dirname = \"$file_path/lstat_stat_basic\";\n@rmdir($dirname);\nmkdir($dirname);\n// stat of the dir created\n$dir_stat = stat($dirname);\nclearstatcache();\nsleep(2);\n// creating file\n$filename = \"$dirname/lstat_stat_basic.tmp\";\n$file_handle = fopen($filename, \"w\");\nfclose($file_handle);\n// stat of the file created\n$file_stat = stat($filename);\nsleep(2);\n// now new stat of the dir after file is created\n$new_dir_stat = stat($dirname);\nclearstatcache();\n// create soft link and record stat\n$sym_linkname = \"$file_path/lstat_stat_basic_link.tmp\";\nsymlink($filename, $sym_linkname);\n// stat of the link created\n$link_stat = lstat($sym_linkname);\nsleep(2);\n// new stat of the file, after a softlink to this file is created\n$new_file_stat = stat($filename);\nclearstatcache();\n// stat contains 13 different values stored twice, can be accessed using\n// numeric and named keys, compare them to see they are same\necho \"*** Testing stat() and lstat() : validating the values stored in stat ***\\n\";\n// Initial stat values\nvar_dump( compare_self_stat($file_stat) ); //expect true\nvar_dump( compare_self_stat($dir_stat) );  //expect true\nvar_dump( compare_self_stat($link_stat) ); // expect true\n// New stat values taken after creation of file & link\nvar_dump( compare_self_stat($new_file_stat) ); //expect true\nvar_dump( compare_self_stat($new_dir_stat) );  // expect true\n// compare the two stat values, initial stat and stat recorded after\n// creating files and link, also dump the value of stats\necho \"*** Testing stat() and lstat() : comparing stats (recorded before and after file/link creation) ***\\n\";\necho \"-- comparing difference in dir stats before and after creating file in it --\\n\";\n$affected_elements = array( 9, 10, 'mtime', 'ctime' );\nvar_dump( compare_stats($dir_stat, $new_dir_stat, $affected_elements, '!=', true) ); // expect true\necho \"-- comparing difference in file stats before and after creating link to it --\\n\";\nvar_dump( compare_stats($file_stat, $new_file_stat, $all_stat_keys, \"==\", true) ); // expect true\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
