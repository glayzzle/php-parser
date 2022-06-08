// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/oo_getstatusstring.phpt
  it("This test will test getStatusString method in ZipArchive", function () {
    expect(parser.parseCode("<?php\n$dirname = __DIR__ . '/';\n$arch = new ZipArchive;\n$arch->open($dirname.'foo.zip',ZIPARCHIVE::CREATE);\nvar_dump($arch->getStatusString());\n//delete an index that does not exist - trigger error\n$arch->deleteIndex(2);\nvar_dump($arch->getStatusString());\n$arch->close();\n?>")).toMatchSnapshot();
  });
});
