// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/copy_basic.phpt
  it("Test copy() function: basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing copy() function: to copy file from source to destination --\\n\";\nvar_dump( file_exists(__FILE__) );\n/* copying the file */\n$file_path = __DIR__;\n$file_name1 = $file_path.\"/copy_basic1.tmp\";\n$file_name2 = $file_path.\"/copy_basic2.tmp\";\nvar_dump( copy(__FILE__, $file_name1) );\nvar_dump( copy($file_name1, $file_name2) );\necho \"-- Checking whether the copy of file exists --\\n\";\nvar_dump( file_exists($file_name1) );\nvar_dump( file_exists($file_name2) );\necho \"-- Checking filepermissions of file and its copies --\\n\";\nprintf( \"%o\", fileperms(__FILE__) );\necho \"\\n\";\nprintf( \"%o\", fileperms($file_name1) );\necho \"\\n\";\nprintf( \"%o\", fileperms($file_name2) );\necho \"\\n\";\necho \"*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
