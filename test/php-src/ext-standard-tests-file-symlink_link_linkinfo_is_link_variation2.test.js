// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/symlink_link_linkinfo_is_link_variation2.phpt
  it("Test symlink(), linkinfo(), link() and is_link() functions : usage variations - hardlink to non-existent file", function () {
    expect(parser.parseCode("<?php\n/* Variation 2 : Create hard link to non-existent file */\n$file_path = __DIR__;\n// non-existing filename\n$non_existent_file = \"$file_path/non_existent_file_variation2.tmp\";\n// non-existing linkname\n$non_existent_linkname = \"$file_path/non_existent_linkname_variation2.tmp\";\necho \"*** Creating a hard link to a non-existent file ***\\n\";\n// creating hard link to non_existent file\nvar_dump( link($non_existent_file, $non_existent_linkname) ); // expected false\n// checking linkinfo() and is_link() on the link; expected: false\nvar_dump( linkinfo($non_existent_linkname) );\nvar_dump( is_link($non_existent_linkname) );\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
