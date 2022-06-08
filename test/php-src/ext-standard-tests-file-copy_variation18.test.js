// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/copy_variation18.phpt
  it("Test copy() function: usage variations - stat after copy", function () {
    expect(parser.parseCode("<?php\n/* Test copy(): checking stat of file before and after after copy operation */\n$file_path = __DIR__;\nrequire($file_path.\"/file.inc\");\necho \"*** Test copy() function: stat of file before and after copy ***\\n\";\n$src_file_name = $file_path.\"/copy_variation18.tmp\";\n$file_handle =  fopen($src_file_name, \"w\");\nfwrite($file_handle, str_repeat(\"Hello2world...\\n\", 100));\nfclose($file_handle);\n$dest_file_name = $file_path.\"/copy_copy_variation18.tmp\";\nclearstatcache();\n$stat_before_copy = stat($src_file_name);\nclearstatcache();\necho \"Copy operation => \";\nvar_dump( copy($src_file_name, $dest_file_name) );\n$stat_after_copy = stat($src_file_name);\nclearstatcache();\n// compare all stat fields except access time\n$stat_keys_to_compare = array(\"dev\", \"ino\", \"mode\", \"nlink\", \"uid\", \"gid\",\n                       \"rdev\", \"size\", \"mtime\", \"ctime\",\n                       \"blksize\", \"blocks\");\necho \"Comparing the stats of file before and after copy operation => \";\nvar_dump( compare_stats($stat_before_copy, $stat_after_copy, $stat_keys_to_compare) );\necho \"*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
