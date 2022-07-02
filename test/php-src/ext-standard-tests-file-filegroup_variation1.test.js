// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/filegroup_variation1.phpt
  it("Test filegroup() function: usage variations - links", function () {
    expect(parser.parseCode("<?php\n/* Creating soft and hard links to a file and applying filegroup() on links */\n$file_path = __DIR__;\nfclose( fopen($file_path.\"/filegroup_variation1.tmp\", \"w\") );\necho \"*** Testing filegroup() with links ***\\n\";\n/* With symlink */\nsymlink($file_path.\"/filegroup_variation1.tmp\", $file_path.\"/filegroup_variation1_symlink.tmp\");\nvar_dump( filegroup($file_path.\"/filegroup_variation1_symlink.tmp\") ); //expected true\nclearstatcache();\n/* With hardlink */\nlink($file_path.\"/filegroup_variation1.tmp\", $file_path.\"/filegroup_variation1_link.tmp\");\nvar_dump( filegroup($file_path.\"/filegroup_variation1_link.tmp\") );  // expected: true\nclearstatcache();\necho \"\\n*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
