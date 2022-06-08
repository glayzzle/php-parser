// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/oo_count.phpt
  it("ziparchive::count()", function () {
    expect(parser.parseCode("<?php\n$dirname = __DIR__ . '/';\n$file = $dirname . 'test.zip';\n$zip = new ZipArchive;\nif (!$zip->open($file)) {\n    exit('failed');\n}\nvar_dump($zip->numFiles, count($zip), $zip->numFiles == count($zip));\n?>\nDone")).toMatchSnapshot();
  });
});
