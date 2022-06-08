// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/oo_add_from_string.phpt
  it("ziparchive::addFromString and FL_OVERWRITE", function () {
    expect(parser.parseCode("<?php\ninclude __DIR__ . '/utils.inc';\n$dirname = __DIR__ . '/oo_add_from_string_dir/';\n$file = $dirname . 'tmp.zip';\n@mkdir($dirname);\ncopy(__DIR__ . '/test.zip', $file);\n$zip = new ZipArchive();\nif (!$zip->open($file)) {\n        exit('failed');\n}\n// New file\nvar_dump($zip->addFromString('bar', __FILE__));\nvar_dump($zip->status == ZipArchive::ER_OK);\n// Fails to add existing file\nvar_dump($zip->addFromString('entry1.txt', __FILE__, 0));\nvar_dump($zip->status == ZipArchive::ER_EXISTS);\n// Overwrite\nvar_dump($zip->addFromString('entry1.txt', __FILE__, ZipArchive::FL_OVERWRITE));\nvar_dump($zip->status == ZipArchive::ER_OK);\nif ($zip->status == ZipArchive::ER_OK) {\n    dump_entries_name($zip);\n    $zip->close();\n} else {\n    echo \"failed\\n\";\n}\n?>\nDone")).toMatchSnapshot();
  });
});
