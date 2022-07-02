// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/filetype_variation.phpt
  it("Test filetype() function: Variations", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing filetype() with various types ***\\n\";\n$file_path = __DIR__;\n$file1 = $file_path.\"/filetype1_variation.tmp\";\n$file2 = $file_path.\"/filetype2_variation.tmp\";\n$file3 = $file_path.\"/filetype3_variation.tmp\";\n$link1 = $file_path.\"/filetype1_variation_link.tmp\";\n$link2 = $file_path.\"/filetype2_variation_link.tmp\";\nfclose( fopen($file1, \"w\") );\nfclose( fopen($file2, \"w\") );\necho \"-- Checking with files --\\n\";\nprint( filetype($file1) ).\"\\n\";\nprint( filetype($file2) ).\"\\n\";\nclearstatcache();\necho \"-- Checking with links: hardlink --\\n\";\nlink( $file1, $link1);\nprint( filetype($link1 ) ).\"\\n\";\necho \"-- Checking with links: symlink --\\n\";\nsymlink( $file2, $link2);\nprint( filetype($link2) ).\"\\n\";\nunlink($link1);\nunlink($link2);\nunlink($file1);\nunlink($file2);\necho \"-- Checking with directory --\\n\";\nmkdir(\"$file_path/filetype_variation\");\nprint( filetype(\"$file_path/filetype_variation\") ).\"\\n\";\nrmdir( \"$file_path/filetype_variation\" );\necho \"-- Checking with fifo --\\n\";\nposix_mkfifo( $file3, 0755);\nprint( filetype( $file3) ).\"\\n\";\nunlink($file3);\n/* Checking with block in file */\n/* To test this PEAR package should be installed */\necho \"\\n*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
