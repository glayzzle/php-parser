// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/oo_getnameindex.phpt
  it("getNameIndex", function () {
    expect(parser.parseCode("<?php\n$dirname = __DIR__ . '/';\ninclude $dirname . 'utils.inc';\n$file = $dirname . 'oo_getnameindex.zip';\n@unlink($file);\n$zip = new ZipArchive;\nif (!$zip->open($file, ZIPARCHIVE::CREATE)) {\n    exit('failed');\n}\n$zip->addFromString('entry1.txt', 'entry #1');\n$zip->addFromString('entry2.txt', 'entry #2');\n$zip->addFromString('dir/entry2d.txt', 'entry #2');\nif (!$zip->status == ZIPARCHIVE::ER_OK) {\n    echo \"failed to write zip\\n\";\n}\n$zip->close();\nif (!$zip->open($file)) {\n    exit('failed');\n}\nvar_dump($zip->getNameIndex(0));\nvar_dump($zip->getNameIndex(1));\nvar_dump($zip->getNameIndex(2));\nvar_dump($zip->getNameIndex(3));\n$zip->close();\n?>")).toMatchSnapshot();
  });
});
