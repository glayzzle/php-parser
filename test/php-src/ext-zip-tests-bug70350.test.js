// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/bug70350.phpt
  it("Bug #70350 (ZipArchive::extractTo allows for directory traversal when creating directories)", function () {
    expect(parser.parseCode("<?php\n$dir = __DIR__.\"/bug70350\";\nmkdir($dir);\n$archive = new ZipArchive();\n$archive->open(\"$dir/a.zip\",ZipArchive::CREATE);\n$archive->addEmptyDir(\"../down2/\");\n$archive->close();\n$archive2 = new ZipArchive();\n$archive2->open(\"$dir/a.zip\");\n$archive2->extractTo($dir);\n$archive2->close();\nvar_dump(file_exists(\"$dir/down2/\"));\nvar_dump(file_exists(\"../down2/\"));\n?>")).toMatchSnapshot();
  });
});
