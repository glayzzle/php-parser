// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/unlink_variation4.phpt
  it("Test unlink() function : usage variations - unlink deleted file", function () {
    expect(parser.parseCode("<?php\n/* Try deleting a file which is already deleted */\n$file_path = __DIR__;\n// temp file used\n$filename = \"$file_path/unlink_variation4.tmp\";\necho \"*** Testing unlink() on deleted file ***\\n\";\n// create temp file\n$fp = fopen($filename, \"w\");\nfclose($fp);\n// delete temp file\nvar_dump( unlink($filename) );  // expected: true\nvar_dump( file_exists($filename) );  // confirm file deleted\n// delete deleted file\nvar_dump( unlink($filename) );  // expected: false\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
