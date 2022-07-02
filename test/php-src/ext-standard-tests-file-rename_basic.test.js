// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/rename_basic.phpt
  it("Test rename() function: basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing rename() on non-existing file ***\\n\";\n$file_path = __DIR__;\nrequire \"$file_path/file.inc\";\n$src_name = \"$file_path/rename_basic.tmp\";\n$dest_name = \"$file_path/rename_basic_new.tmp\";\n// create the file\n$fp = fopen($src_name, \"w\");\n$old_stat = stat($src_name);\nfclose($fp);\nvar_dump( rename($src_name, $dest_name) ); // expecting true\nvar_dump( file_exists($src_name) ); // expecting false\nvar_dump( file_exists($dest_name) ); // expecting true\n$new_stat = stat(\"$file_path/rename_basic_new.tmp\");\n// checking statistics of old and renamed file - both should be same except ctime\n$keys_to_compare = array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12,\n                       \"dev\", \"ino\", \"mode\", \"nlink\", \"uid\", \"gid\",\n                       \"rdev\", \"size\", \"atime\", \"mtime\", \"blksize\", \"blocks\");\nvar_dump( compare_stats($old_stat, $new_stat, $keys_to_compare) );\n?>")).toMatchSnapshot();
  });
});
