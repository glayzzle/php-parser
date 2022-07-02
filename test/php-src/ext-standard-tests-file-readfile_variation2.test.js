// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/readfile_variation2.phpt
  it("Test readfile() function: usage variations - links", function () {
    expect(parser.parseCode("<?php\n/* Variation 2 : Create file\n                 Create soft/hard link to it\n                 Read link using readfile()\n                 Delete file and its link\n*/\n// include file.inc\nrequire(\"file.inc\");\n$file_path = __DIR__;\n// temp file used here\n$filename = \"$file_path/readfile_variation2.tmp\";\n// create temp file and insert data into it\n$fp = fopen($filename, \"w\");\nfill_file($fp, \"text_with_new_line\", 50);\nfclose($fp);\n// temp link name used\n$linkname = \"$file_path/readfile_variation2_link.tmp\";\n/* Checking readfile() operation on soft link */\necho \"*** Testing readfile() on soft link ***\\n\";\n// create soft link to $filename\nvar_dump( symlink($filename, $linkname) );\n// readfile() on soft link\n$count = readfile($linkname); // with default args\necho \"\\n\";\nvar_dump($count);\n// delete link\nunlink($linkname);\n/* Checking readfile() operation on hard link */\necho \"\\n*** Testing readfile() on hard link ***\\n\";\n// create hard link to $filename\nvar_dump( link($filename, $linkname) );\n// readfile() on hard link\n$count = readfile($linkname); // default args\necho \"\\n\";\nvar_dump($count);\n// delete link\nunlink($linkname);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
