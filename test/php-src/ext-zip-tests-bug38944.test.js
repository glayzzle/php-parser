// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/bug38944.phpt
  it("Bug #38944 (newly created ZipArchive segfaults when accessing comment property)", function () {
    expect(parser.parseCode("<?php\n$arc_name = __DIR__.\"/bug38944.zip\";\n$foo = new ZipArchive;\n$foo->open($arc_name, ZIPARCHIVE::CREATE);\nvar_dump($foo->status);\nvar_dump($foo->statusSys);\nvar_dump($foo->numFiles);\nvar_dump($foo->filename);\nvar_dump($foo->comment);\nvar_dump($foo);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
