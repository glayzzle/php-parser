// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/bug50678.phpt
  it("Bug #50678 (files extracted by ZipArchive class lost their original modified time)", function () {
    expect(parser.parseCode("<?php\n$filename = __DIR__ . '/test.zip';\n$dirname = __DIR__ . '/bug50678';\n@mkdir($dirname);\n$zip = new ZipArchive();\n$zip->open($filename);\n$zip->extractTo($dirname);\n$zip->close();\nvar_dump(date('Ym', filemtime($dirname . '/entry1.txt')));\n?>\nDone")).toMatchSnapshot();
  });
});
