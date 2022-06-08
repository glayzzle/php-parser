// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/symlink_link_linkinfo_is_link_error2.phpt
  it("Test symlink(), linkinfo(), link() and is_link() functions : error conditions - link & is_link", function () {
    expect(parser.parseCode("<?php\n// create temp $filename and create link $linkname to it\n$filename = __DIR__.\"/symlink_link_linkinfo_is_link_error2.tmp\";\n$fp = fopen($filename, \"w\");  // create temp file\nfclose($fp);\n// linkname used to create soft/hard link\n$linkname = __DIR__.\"/symlink_link_linkinfo_is_link_link_error2.tmp\";\necho \"*** Testing link() for error conditions ***\\n\";\n//invalid arguments\nvar_dump( link('', $linkname) );  // empty string as filename\nvar_dump( link(' ', $linkname) );  // space as filename\nvar_dump( link(false, $linkname) );  // boolean false as filename\nvar_dump( link($filename, '') );  // '' as linkname\nvar_dump( link($filename, false) );  // false as linkname\necho \"\\n*** Testing is_link() for error conditions ***\\n\";\n//invalid arguments\nvar_dump( is_link('') );  // empty string as linkname\nvar_dump( is_link(' ') );  // space as linkname\nvar_dump( is_link(false) );  // boolean false as linkname\nvar_dump( is_link($filename) );  // file given to is_link\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
