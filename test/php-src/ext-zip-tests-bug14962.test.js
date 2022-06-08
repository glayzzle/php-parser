// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/bug14962.phpt
  it("Bug #14962 (::extractTo second argument is not really optional)", function () {
    expect(parser.parseCode("<?php\n$dir = __DIR__;\n$file = '__tmp14962.txt';\n$fullpath = $dir . '/' . $file;\n$za = new ZipArchive;\n$za->open($dir . '/__14962.zip', ZIPARCHIVE::CREATE);\n$za->addFromString($file, '1234');\n$za->close();\nif (!is_file($dir . \"/__14962.zip\")) {\n    die('failed to create the archive');\n}\n$za = new ZipArchive;\n$za->open($dir . '/__14962.zip');\n$za->extractTo($dir, NULL);\n$za->close();\nif (is_file($fullpath)) {\n    unlink($fullpath);\n    echo \"Ok\";\n}\nunlink($dir . '/' . '__14962.zip');\n?>")).toMatchSnapshot();
  });
});
