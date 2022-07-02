// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/unlink_error.phpt
  it("Testing unlink() function : error conditions", function () {
    expect(parser.parseCode("<?php\n$file_path = __DIR__;\n$filename = \"$file_path/unlink_error.tmp\";  // temp file name used here\n$fp = fopen($filename, \"w\");  // create file\nfclose($fp);\n// creating a context\n$context = stream_context_create();\necho \"*** Testing unlink() : error conditions ***\\n\";\necho \"\\n-- Testing unlink() on invalid arguments --\\n\";\n// invalid arguments\nvar_dump( unlink('') );  // $filename as empty string\nvar_dump( file_exists('') );  // confirm file doesn't exist\nvar_dump( unlink(false) );  // $filename as boolean false\nvar_dump( file_exists(false) );  // confirm file doesn't exist\necho \"\\n-- Testing unlink() on non-existent file --\\n\";\nvar_dump( unlink(__DIR__.\"/non_existent_file.tmp\") );\necho \"\\n-- Testing unlink() on directory --\\n\";\n// temp directory used here\n$dirname = \"$file_path/unlink_error\";\n// create temp dir\nmkdir($dirname);\n// unlinking directory\nvar_dump( unlink($dirname) );  // expected: false as unlink() does not work on dir\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
