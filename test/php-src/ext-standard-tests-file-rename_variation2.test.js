// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/rename_variation2.phpt
  it("Test rename() function: usage variations-3", function () {
    expect(parser.parseCode("<?php\n$file_path = __DIR__;\n$dest_dir = \"$file_path/rename_variation2_dir\";\n// create the $dest_dir\nmkdir($dest_dir);\n/* Testing rename() on soft and hard links with different permissions */\necho \"\\n*** Testing rename() on soft links ***\\n\";\n// create the file\n$filename = $file_path.\"/rename_variation2.tmp\";\n@unlink($filename);\nvar_dump(touch($filename));\n// create the soft links to the file\n$linkname = $file_path.\"/rename_variation2_soft_link1.tmp\";\nvar_dump(symlink($filename, $linkname));\n//rename the link to a new name in the same dir\n$dest_linkname = $file_path.\"/rename_variation2_soft_link2.tmp\";\nvar_dump( rename( $linkname, $dest_linkname) );\n//ensure that link was renamed\nclearstatcache();\nvar_dump( file_exists($linkname) );  // expecting false\nvar_dump( file_exists($dest_linkname) );  // expecting true\n// rename a link across dir\nvar_dump( rename($dest_linkname, $dest_dir.\"/rename_variation2_soft_link2.tmp\"));\n//ensure that link got renamed\nclearstatcache();\nvar_dump( file_exists($dest_linkname) );  // expecting false\nvar_dump( file_exists($dest_dir.\"/rename_variation2_soft_link2.tmp\") ); // expecting true\n// delete the link file now\nunlink($dest_dir.\"/rename_variation2_soft_link2.tmp\");\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
