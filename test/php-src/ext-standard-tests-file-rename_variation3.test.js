// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/rename_variation3.phpt
  it("Test rename() function: usage variations-4", function () {
    expect(parser.parseCode("<?php\n$file_path = __DIR__;\n$dest_dir = \"$file_path/rename_variation3_dir\";\n// create the $dest_dir\nmkdir($dest_dir);\necho \"\\n*** Testing rename() on hard links ***\\n\";\n$filename = $file_path.\"/rename_variation31.tmp\";\n@unlink($filename);\nvar_dump(touch($filename));\n$linkname = $file_path.\"/rename_variation3_hard_link1.tmp\";\nvar_dump(link($filename, $linkname));\n//rename the link to a new name in the same dir\n$dest_linkname = $file_path.\"/rename_variation3_hard_link2.tmp\";\nvar_dump( rename( $filename, $dest_linkname) );\n//ensure that link was renamed\nvar_dump( file_exists($filename) );  // expecting false\nvar_dump( file_exists($dest_linkname) );  // expecting true\n// rename a hard link across dir\nvar_dump( rename($dest_linkname, $dest_dir.\"/rename_variation3_hard_link2.tmp\") );\n//ensure that link got renamed\nvar_dump( file_exists($dest_linkname) );  // expecting false\nvar_dump( file_exists($dest_dir.\"/rename_variation3_hard_link2.tmp\") ); // expecting true\n// delete the link file now\nunlink($dest_dir.\"/rename_variation3_hard_link2.tmp\");\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
