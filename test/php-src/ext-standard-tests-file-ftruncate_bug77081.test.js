// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/ftruncate_bug77081.phpt
  it("Bug #77081 ftruncate() changes seek pointer in c mode", function () {
    expect(parser.parseCode("<?php\n$filename = __DIR__ . DIRECTORY_SEPARATOR . \"test77081\";\nfile_put_contents($filename, 'foo');\n$stream = fopen($filename, 'c');\nftruncate($stream, 0);\nvar_dump(ftell($stream));\nfwrite($stream, 'bar');\nfclose($stream);\nvar_dump(file_get_contents($filename));\n?>")).toMatchSnapshot();
  });
});
