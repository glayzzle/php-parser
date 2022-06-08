// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/bug11216.phpt
  it("Bug #11216 (::addEmptyDir() crashes when the directory already exists)", function () {
    expect(parser.parseCode("<?php\n$archive = new ZipArchive();\n$archive->open('__test.zip', ZIPARCHIVE::CREATE);\nvar_dump($archive->addEmptyDir('test'));\nprint_r($archive);\nvar_dump($archive->addEmptyDir('test'));\n$archive->close();\nunlink('__test.zip');\n?>")).toMatchSnapshot();
  });
});
