// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/bug70103.phpt
  it("Bug #70103 (ZipArchive::addGlob ignores remove_all_path option)", function () {
    expect(parser.parseCode("<?php\n$dir = __DIR__ . '/bug70103';\nmkdir($dir); chmod($dir, 0777);\nfile_put_contents($dir . '/foo.txt', 'foo');\n$zip = new ZipArchive();\n$zip->open($dir . '/test.zip', ZipArchive::CREATE | ZipArchive::OVERWRITE);\n$zip->addGlob($dir . '/*.txt', GLOB_NOSORT, array('remove_all_path' => true));\n$zip->close();\n$zip = new ZipArchive();\n$zip->open($dir . '/test.zip');\nvar_dump($zip->numFiles);\nvar_dump($zip->getNameIndex(0));\n$zip->close();\n?>")).toMatchSnapshot();
  });
});
