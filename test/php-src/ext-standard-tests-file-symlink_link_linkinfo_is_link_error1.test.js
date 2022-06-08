// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/symlink_link_linkinfo_is_link_error1.phpt
  it("Test symlink(), linkinfo(), link() and is_link() functions : error conditions - symlink & linkinfo", function () {
    expect(parser.parseCode("<?php\n// create temp $filename and create link $linkname to it\n$filename = __DIR__.\"/symlink_link_linkinfo_is_link_error1.tmp\";\n$fp = fopen($filename, \"w\");  // create temp file\nfclose($fp);\n// linkname used to create soft/hard link\n$linkname = __DIR__.\"/symlink_link_linkinfo_is_link_link_error1.tmp\";\necho \"*** Testing symlink() for error conditions ***\\n\";\n//invalid arguments\nvar_dump( symlink('', $linkname) );  // empty string as filename\nvar_dump( symlink(false, $linkname) );  // boolean false as filename\nvar_dump( symlink($filename, '') );  // '' as linkname\nvar_dump( symlink($filename, false) );  // false as linkname\necho \"\\n*** Testing linkinfo() for error conditions ***\\n\";\n//invalid arguments\nvar_dump( linkinfo('') );  // empty string as linkname\nvar_dump( linkinfo(false) );  // boolean false as linkname\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
