// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fileinode_basic.phpt
  it("Test fileinode() function: Basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing fileinode() with file, directory ***\\n\";\n/* Getting inode of created file */\n$file_path = __DIR__;\nfopen(\"$file_path/inode.tmp\", \"w\");\nprint( fileinode(\"$file_path/inode.tmp\") ).\"\\n\";\n/* Getting inode of current file */\nprint( fileinode(__FILE__) ).\"\\n\";\n/* Getting inode of directories */\nprint( fileinode(\".\") ).\"\\n\";\nprint( fileinode(\"./..\") ).\"\\n\";\necho \"\\n*** Done ***\";")).toMatchSnapshot();
  });
});
