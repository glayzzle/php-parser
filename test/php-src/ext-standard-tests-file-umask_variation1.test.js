// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/umask_variation1.phpt
  it("Test umask() function: usage variations - perms from 0000 to 0350", function () {
    expect(parser.parseCode("<?php\n$file_path = __DIR__;\n/* Check umask() on file/dir */\necho \"*** Testing umask() on file and directory ***\\n\";\n// temp filename used\n$filename = \"$file_path/umask_variation1.tmp\";\n// temp dir used\n$dirname = \"$file_path/umask_variation1\";\nfor($mask = 0000; $mask <= 0350; $mask++) {\n  echo \"-- Setting umask to \";\n  echo sprintf('%03o', $mask);\n  echo \" --\\n\";\n  // setting umask\n  umask($mask);\n  /* umasking file */\n  // creating temp file\n  $fp = fopen($filename, \"w\");\n  fclose($fp);\n  echo \"File permission : \";\n  // check file permission\n  echo substr(sprintf('%o', fileperms($filename)), -3);\n  echo \"\\n\";\n  // chmod file to 0777 to enable deletion\n  chmod($filename, 0777);\n  // delete temp file created here\n  unlink($filename);\n  /* umasking directory */\n  // create temp dir\n  mkdir($dirname);\n  echo \"Directory permission : \";\n  // check $dirname permission\n  echo substr(sprintf('%o', fileperms($dirname)), -3);\n  echo \"\\n\";\n  // chmod 0777 to enable deletion\n  chmod($dirname, 0777);\n  // delete temp dir created\n  rmdir($dirname);\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
