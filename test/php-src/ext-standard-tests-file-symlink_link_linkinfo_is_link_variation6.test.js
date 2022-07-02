// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/symlink_link_linkinfo_is_link_variation6.phpt
  it("Test symlink(), linkinfo(), link() and is_link() functions : usage variations - link & dir perms.", function () {
    expect(parser.parseCode("<?php\n/* Variation 6 : Change permission of directory and try creating links inside that directory */\n$file_path = __DIR__;\necho \"*** Creating links in a directory without permission to allow the operation ***\\n\";\n// temp file used\n$dirname = \"$file_path/symlink_link_linkinfo_is_link_variation6\";\nmkdir($dirname);\n$filename = \"$dirname/symlink_link_linkinfo_is_link_variation6.tmp\";\n// remove all permissions from dir\nvar_dump( chmod($dirname, 0000) );\necho \"\\n-- Working with soft links --\\n\";\n$linkname = \"$dirname/non_existent_link_variation5.tmp\";\n// expected: false\nvar_dump( symlink($filename, $linkname) ); // this link won't get created\nvar_dump( linkinfo($linkname) );\nvar_dump( is_link($linkname) );\n// clear the cache\nclearstatcache();\necho \"\\n-- Working with hard links --\\n\";\n// expected: false\nvar_dump( link($filename, $linkname) );\nvar_dump( linkinfo($linkname) );\nvar_dump( is_link($linkname) );\n// clear the cache\nclearstatcache();\nchmod($dirname, 0777);  // to enable dir deletion\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
