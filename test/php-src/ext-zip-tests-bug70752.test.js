// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/bug70752.phpt
  it("Bug #70752 (Depacking with wrong password leaves 0 length files)", function () {
    expect(parser.parseCode("<?php\n$filename = __DIR__ . DIRECTORY_SEPARATOR . 'bug70752.zip';\n$zip = new ZipArchive();\n$zip->open($filename);\n$filename =  __DIR__ . DIRECTORY_SEPARATOR . 'bug70752.txt';\nvar_dump(file_exists($filename));\n$zip->setPassword('bar'); // correct password would be 'foo'\n$zip->extractTo(__DIR__);\n$zip->close();\nvar_dump(file_exists($filename));\n?>")).toMatchSnapshot();
  });
});
