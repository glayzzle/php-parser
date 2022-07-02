// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/is_file_variation2.phpt
  it("Test is_file() function: usage variations - links", function () {
    expect(parser.parseCode("<?php\n/* Creating soft and hard links to a file and applying is_file() on links */\n$file_path = __DIR__;\nfclose( fopen($file_path.\"/is_file_variation2.tmp\", \"w\") );\necho \"*** Testing is_file() with links ***\\n\";\n/* With symlink */\nsymlink($file_path.\"/is_file_variation2.tmp\", $file_path.\"/is_file_variation2_symlink.tmp\");\nvar_dump( is_file($file_path.\"/is_file_variation2_symlink.tmp\") ); //expected true\nclearstatcache();\n/* With hardlink */\nlink($file_path.\"/is_file_variation2.tmp\", $file_path.\"/is_file_variation2_link.tmp\");\nvar_dump( is_file($file_path.\"/is_file_variation2_link.tmp\") );  // expected: true\nclearstatcache();\necho \"\\n*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
