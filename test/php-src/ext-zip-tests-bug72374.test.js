// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/bug72374.phpt
  it("Bug #72374 (ZipArchive::addGlob remove_path option strips first char of filename)", function () {
    expect(parser.parseCode("<?php\n$dirname = dirname(__FILE__) . '/';\ninclude $dirname . 'utils.inc';\n$dirname = $dirname . 'bug72374';\nmkdir($dirname);\n$file1 = $dirname . '/some-foo.txt';\ntouch($file1);\n$file2 = $dirname . '/some-bar.txt';\ntouch($file2);\n$zip = new ZipArchive();\n$zip->open($dirname . '/test.zip', ZipArchive::CREATE | ZipArchive::OVERWRITE);\n$zip->addGlob($file1, 0, array('remove_path' => $dirname . '/some-'));\n$zip->addGlob($file1, 0, array('remove_path' => $dirname . '/'));\n$zip->addGlob($file2, 0, array('remove_path' => $dirname));\nverify_entries($zip, ['foo.txt', 'some-foo.txt', 'some-bar.txt']);\n$zip->close();\n?>")).toMatchSnapshot();
  });
});
