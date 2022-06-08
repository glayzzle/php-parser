// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/oo_addemptydir_error.phpt
  it("ziparchive::addEmptyDir error", function () {
    expect(parser.parseCode("<?php\ninclude __DIR__ . '/utils.inc';\n$zip = new ZipArchive;\nif (!$zip->open(__DIR__ . '/test.zip', ZipArchive::RDONLY)) {\n    exit('failed');\n}\nvar_dump($zip->addEmptyDir('emptydir'));\nif ($zip->status == ZipArchive::ER_RDONLY) {\n    echo \"OK\\n\";\n} else if ($zip->status == ZipArchive::ER_OK) {\n    dump_entries_name($zip);\n} else {\n    echo \"Lost\\n\";\n}\n$zip->close();\n?>")).toMatchSnapshot();
  });
});
