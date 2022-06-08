// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/unlink_variation3.phpt
  it("Test unlink() function : usage variations - unlink links", function () {
    expect(parser.parseCode("<?php\n/* Delete link files - soft and hard links */\n$file_path = __DIR__;\n// temp file used\n$filename = \"$file_path/unlink_variation3.tmp\";\necho \"*** Testing unlink() on soft and hard links ***\\n\";\n// create temp file\n$fp = fopen($filename, \"w\");\nfclose($fp);\n// link name used here\n$linkname = \"$file_path/unlink_variation3_link.tmp\";\necho \"-- Testing unlink() on soft link --\\n\";\n// create soft link\nvar_dump( symlink($filename, $linkname) );  // expected: true\n// unlink soft link\nvar_dump( unlink($linkname) );  // expected: true\nvar_dump( file_exists($linkname) );  // confirm link is deleted\necho \"-- Testing unlink() on hard link --\\n\";\n// create hard link\nvar_dump( link($filename, $linkname) );  // expected: true\n// delete hard link\nvar_dump( unlink($linkname) );  // expected: true\nvar_dump( file_exists($linkname) );  // confirm link is deleted\n// delete temp file\nvar_dump( unlink($filename) );\nvar_dump( file_exists($filename) );  // confirm file is deleted\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
