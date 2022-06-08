// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/filegroup_basic.phpt
  it("Test filegroup() function: basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing filegroup(): basic functionality ***\\n\";\necho \"-- Testing with the file or directory created by owner --\\n\";\n$file_path = __DIR__;\nvar_dump( filegroup(__FILE__) );\nvar_dump( filegroup(\".\") );\nvar_dump( filegroup(\"./..\") );\n/* Newly created files and dirs */\n$file_name = $file_path.\"/filegroup_basic.tmp\";\n$file_handle = fopen($file_name, \"w\");\n$string = \"Hello, world\\n1234\\n123Hello\";\nfwrite($file_handle, $string);\nvar_dump( filegroup($file_name) );\nfclose($file_handle);\n$dir_name = $file_path.\"/filegroup_basic\";\nmkdir($dir_name);\nvar_dump( filegroup($dir_name) );\necho \"\\n-- Testing with the standard file or directory --\\n\";\nvar_dump( filegroup(\"/etc/passwd\") );\nvar_dump( filegroup(\"/etc\") );\nvar_dump( filegroup(\"/\") );\necho \"\\n*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
