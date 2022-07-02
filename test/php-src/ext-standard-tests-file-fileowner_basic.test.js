// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fileowner_basic.phpt
  it("Test fileowner() function: basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing fileowner(): basic functionality ***\\n\";\necho \"-- Testing with the file or directory created by owner --\\n\";\nvar_dump( fileowner(__FILE__) );\nvar_dump( fileowner(\".\") );\nvar_dump( fileowner(\"./..\") );\n/* Newly created files and dirs */\n$file_path = __DIR__;\n$file_name = $file_path.\"/fileowner_basic.tmp\";\n$file_handle = fopen($file_name, \"w\");\n$string = \"Hello, world\\n1234\\n123Hello\";\nfwrite($file_handle, $string);\nvar_dump( fileowner($file_name) );\nfclose($file_handle);\n$dir_name = $file_path.\"/fileowner_basic\";\nmkdir($dir_name);\nvar_dump( fileowner($dir_name) );\necho \"*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
