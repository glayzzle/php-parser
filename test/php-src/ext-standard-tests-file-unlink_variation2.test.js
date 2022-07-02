// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/unlink_variation2.phpt
  it("Test unlink() function : usage variations - unlink file in use", function () {
    expect(parser.parseCode("<?php\n/* Try to unlink file when file handle is still in use */\n$file_path = __DIR__;\necho \"*** Testing unlink() on a file which is in use ***\\n\";\n// temp file name used here\n$filename = \"$file_path/unlink_variation2.tmp\";\n// create file\n$fp = fopen($filename, \"w\");\n// try unlink() on $filename\nvar_dump( unlink($filename) );  // expected: true on linux\nvar_dump( file_exists($filename) );  // confirm file is deleted\n// now close file handle\nfclose($fp);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
