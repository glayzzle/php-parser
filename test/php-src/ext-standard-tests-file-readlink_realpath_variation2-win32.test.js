// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/readlink_realpath_variation2-win32.phpt
  it("Test readlink() and realpath() functions: usage variation - linkname/filename stored in array(Bug #42038)", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing readlink() and realpath() : usage variations ***\\n\";\n$name_prefix = __DIR__;\n// create temp dir\nmkdir(\"$name_prefix/readlink_realpath_variation2/home/tests/link/\", 0777, true);\n// create the file\n$filename = \"$name_prefix/readlink_realpath_variation2/home/tests/link/readlink_realpath_variation2.tmp\";\n$fp = fopen($filename, \"w\");\nfclose($fp);\necho \"\\n*** Testing readlink() and realpath() with linkname stored in an array ***\\n\";\n$link_arr = array (\n  \"$name_prefix////readlink_realpath_variation2/home/tests/link/readlink_realpath_variation2_link.tmp\",\n  \"$name_prefix/./readlink_realpath_variation2/home/../home//tests//..//..//..//home//readlink_realpath_variation2_link.tmp/\"\n);\necho \"\\n-- Testing readlink() and realpath() with softlink, linkname stored inside an array --\\n\";\n// creating the links\nvar_dump( symlink($filename, $link_arr[0]) );\nvar_dump( readlink($link_arr[0]) );\nvar_dump( realpath($link_arr[0]) );\nvar_dump( symlink($filename, $link_arr[1]) );\nvar_dump( readlink($link_arr[1]) );\nvar_dump( realpath($link_arr[1]) );\n// deleting the link\nunlink($link_arr[0]);\nunlink($link_arr[1]);\necho \"\\n-- Testing readlink() and realpath() with hardlink, linkname stored inside an array --\\n\";\n// creating hard links\nvar_dump( link($filename, $link_arr[0]) );\nvar_dump( readlink($link_arr[0]) );   // invalid because readlink doesn't work with hardlink\nvar_dump( realpath($link_arr[0]) );\nvar_dump( link($filename, $link_arr[1]) );\nvar_dump( readlink($link_arr[1]) );   // invalid because readlink doesn't work with hardlink\nvar_dump( realpath($link_arr[1]) );\n// delete the links\nunlink($link_arr[0]);\nunlink($link_arr[1]);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
