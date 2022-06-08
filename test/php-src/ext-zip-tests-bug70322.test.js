// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/bug70322.phpt
  it("Bug #70322 (ZipArchive::close() doesn't indicate errors)", function () {
    expect(parser.parseCode("<?php\n$zipfile = __DIR__ . '/bug70322.zip';\n$textfile = __DIR__ . '/bug70322.txt';\ntouch($textfile);\n$zip = new ZipArchive();\n$zip->open($zipfile, ZipArchive::CREATE);\n$zip->addFile($textfile);\nunlink($textfile);\nvar_dump($zip->close());\n?>")).toMatchSnapshot();
  });
});
