// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/symlink_link_linkinfo_is_link_variation5.phpt
  it("Test symlink(), linkinfo(), link() and is_link() functions : usage variations - work on deleted link", function () {
    expect(parser.parseCode("<?php\n/* Variation 5 : Creating link, deleting it and checking linkinfo(), is_link() on it */\n$file_path = __DIR__;\necho \"*** Testing linkinfo() and is_link() on deleted link ***\\n\";\n// link name used here\n$linkname  = \"$file_path/symlink_link_linkinfo_is_link_link_variation5.tmp\";\n// create temp dir\n$dirname = \"$file_path/symlink_link_linkinfo_is_link_variation5\";\nmkdir($dirname);\n// filename used here\n$filename = \"$dirname/symlink_link_linkinfo_is_link_variation5.tmp\";\n// create the file\n$fp = fopen($filename, \"w\");\n$data = \"Hello World\";\nfwrite($fp, $data);\nfclose($fp);\nvar_dump( symlink($filename, $linkname) );  // create link\n// delete the link\nvar_dump( unlink($linkname) );  // delete the link\n// clear the cache\nclearstatcache();\n// try using linkinfo() & is_link() on deleted link; expected: false\n$deleted_link = $linkname;\nvar_dump( linkinfo($deleted_link) );\nvar_dump( is_link($deleted_link) );\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
