// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/symlink_link_linkinfo_is_link_variation7.phpt
  it("Test symlink(), linkinfo(), link() and is_link() functions : usage variations - try link to self", function () {
    expect(parser.parseCode("<?php\n/* Variation 7 : Create soft/hard link to itself */\n// temp file used\n$file_path = __DIR__;\n$dir = \"$file_path/symlink_link_linkinfo_is_link_variation7\";\n$filename = \"$dir/symlink_link_linkinfo_is_link_variation7.tmp\";\n// link name used\n$linkname = \"$dir/symlink_link_linkinfo_is_link_link_variation7.tmp\";\n// temp dirname used\n$dirname = \"$dir/home/test\";\nmkdir($dirname, 0755, true);\n// create file\n$fp = fopen($filename, \"w\");\nfclose($fp);\necho \"*** Create soft link to file and then to itself ***\\n\";\n// create soft link to $filename\nvar_dump( symlink($filename, $linkname) );\n// create another link to $linkname\nvar_dump( symlink($linkname, $linkname) );\n// delete link\nunlink($linkname);\necho \"\\n*** Create soft link to directory and then to itself ***\\n\";\n// create soft link to $dirname\nvar_dump( symlink($dirname, $linkname) );\n// create another link to $dirname\nvar_dump( symlink($linkname, $linkname) );\n// delete link\nif (PHP_OS_FAMILY === 'Windows') {\n    rmdir($linkname);\n} else {\n    unlink($linkname);\n}\necho \"\\n*** Create hard link to file and then to itself ***\\n\";\n// create hard link to $filename\nvar_dump( link($filename, $linkname) );\n// create another link to $linkname\nvar_dump( link($linkname, $linkname) );\n// delete link\nunlink($linkname);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
