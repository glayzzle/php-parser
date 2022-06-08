// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/unlink_variation5.phpt
  it("Test unlink() function : usage variations - files with diff. file permissions", function () {
    expect(parser.parseCode("<?php\n/* delete files with different file permission(0000 to 0777) */\n$file_path = __DIR__;\n// temp file used\n$filename = \"$file_path/unlink_variation5.tmp\";\necho \"*** Testing unlink() on a file ***\\n\";\nfor($mode = 0000; $mode <= 0777; $mode++ ) {\n  // create temp file\n  $fp = fopen($filename, \"w\");\n  fclose($fp);\n  // changing mode of file\n  echo \"File permission : $mode\\n\";\n  var_dump( chmod($filename, $mode) );\n  var_dump( unlink($filename) );  // deleting file\n  var_dump( file_exists($filename) );  // confirm file deleted\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
