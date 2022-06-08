// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/rename_variation4.phpt
  it("Test rename() function: usage variations-5", function () {
    expect(parser.parseCode("<?php\n$file_path = __DIR__;\nrequire __DIR__.'/file.inc';\n/* Renaming a file, link and directory to numeric name */\necho \"\\n*** Testing rename() by renaming a file, link and directory to numeric name ***\\n\";\n$fp = fopen($file_path.\"/rename_variation4.tmp\", \"w\");\nfclose($fp);\n// renaming existing file to numeric name\nvar_dump( rename($file_path.\"/rename_variation4.tmp\", $file_path.\"/12345\") );\n// ensure that rename worked fine\nvar_dump( file_exists($file_path.\"/rename_variation4.tmp\" ) );  // expecting false\nvar_dump( file_exists($file_path.\"/12345\" ) );  // expecting true\n// remove the file\nunlink($file_path.\"/12345\");\nmkdir($file_path.\"/rename_variation4_dir\");\n// renaming a directory to numeric name\nvar_dump( rename($file_path.\"/rename_variation4_dir/\", $file_path.\"/12345\") );\n// ensure that rename worked fine\nvar_dump( file_exists($file_path.\"/rename_variation4_dir\" ) );  // expecting false\nvar_dump( file_exists($file_path.\"/12345\" ) );  // expecting true\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
