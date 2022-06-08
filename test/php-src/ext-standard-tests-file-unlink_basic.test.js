// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/unlink_basic.phpt
  it("Testing unlink() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n$file_path = __DIR__;\necho \"*** Testing unlink() on a file ***\\n\";\n$filename = \"$file_path/unlink_basic.tmp\";  // temp file name used here\n$fp = fopen($filename, \"w\");  // create file\nfwrite($fp, \"Hello World\");\nfclose($fp);\n// delete file\nvar_dump( unlink($filename) );\nvar_dump( file_exists($filename) );  // confirm file doesn't exist\necho \"\\n*** Testing unlink() : checking second argument ***\\n\";\n// creating a context\n$context = stream_context_create();\n// temp file name used here\n$filename = \"$file_path/unlink_basic.tmp\";\n$fp = fopen($filename, \"w\");  // create file\nfclose($fp);\n// delete file\nvar_dump( unlink($filename, $context) );  // using $context in second argument\nvar_dump( file_exists($filename) );  // confirm file doesn't exist\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
