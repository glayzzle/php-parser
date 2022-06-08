// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/rename_variation2-win32.phpt
  it("Test rename() function: usage variations", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.'/file.inc';\n$file_path = __DIR__;\nmkdir(\"$file_path/rename_variation2_dir\");\n/* Renaming a file and directory to numeric name */\necho \"\\n*** Testing rename() by renaming a file and directory to numeric name ***\\n\";\n$fp = fopen($file_path.\"/rename_variation2.tmp\", \"w\");\nfclose($fp);\n// renaming existing file to numeric name\nvar_dump( rename($file_path.\"/rename_variation2.tmp\", $file_path.\"/12345\") );\n// ensure that rename worked fine\nvar_dump( file_exists($file_path.\"/rename_variation2.tmp\" ) );  // expecting false\nvar_dump( file_exists($file_path.\"/12345\" ) );  // expecting true\nunlink($file_path.\"/12345\");\n// renaming a directory to numeric name\nvar_dump( rename($file_path.\"/rename_variation2_dir/\", $file_path.\"/12345\") );\n// ensure that rename worked fine\nvar_dump( file_exists($file_path.\"/rename_variation2_dir\" ) );  // expecting false\nvar_dump( file_exists($file_path.\"/12345\" ) );  // expecting true\nrmdir($file_path.\"/12345\");\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
