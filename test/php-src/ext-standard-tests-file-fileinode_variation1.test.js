// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fileinode_variation1.phpt
  it("Test fileinode() function: usage variations - links", function () {
    expect(parser.parseCode("<?php\n/* Creating soft and hard links to a file and applying fileinode() on links */\n$file_path = __DIR__;\nfclose( fopen($file_path.\"/fileinode_variation1.tmp\", \"w\") );\necho \"*** Testing fileinode() with links ***\\n\";\n/* With symlink */\nsymlink($file_path.\"/fileinode_variation1.tmp\", $file_path.\"/fileinode_variation1_symlink.tmp\");\nvar_dump( fileinode($file_path.\"/fileinode_variation1_symlink.tmp\") ); //expected true\nclearstatcache();\n/* With hardlink */\nlink($file_path.\"/fileinode_variation1.tmp\", $file_path.\"/fileinode_variation1_link.tmp\");\nvar_dump( fileinode($file_path.\"/fileinode_variation1_link.tmp\") );  // expected: true\nclearstatcache();\necho \"\\n*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
