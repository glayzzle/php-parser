// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/oo_setcompression.phpt
  it("setCompressionName and setCompressionIndex methods", function () {
    expect(parser.parseCode("<?php\n$tmpfile = __DIR__ . '/oo_setcompression.zip';\nif (file_exists($tmpfile)) {\n    unlink($tmpfile);\n}\n// generate the ZIP file\n$zip = new ZipArchive;\nif ($zip->open($tmpfile, ZipArchive::CREATE) !== TRUE) {\n    exit('failed');\n}\n$txt = file_get_contents(__FILE__);\n$zip->addFromString('entry1.txt', $txt);\n$zip->addFromString('entry2.txt', $txt);\n$zip->addFromString('dir/entry3.txt', $txt);\n$zip->addFromString('entry4.txt', $txt);\n$zip->addFromString('entry5.txt', $txt);\n$zip->addFromString('entry6.txt', $txt);\n$zip->addFromString('entry7.txt', $txt);\nvar_dump($zip->setCompressionName('entry2.txt', ZipArchive::CM_DEFAULT));\nvar_dump($zip->setCompressionName('dir/entry3.txt', ZipArchive::CM_STORE));\nvar_dump($zip->setCompressionName('entry4.txt', ZipArchive::CM_DEFLATE));\nvar_dump($zip->setCompressionIndex(4, ZipArchive::CM_STORE));\nvar_dump($zip->setCompressionIndex(5, ZipArchive::CM_DEFLATE));\nvar_dump($zip->setCompressionIndex(6, ZipArchive::CM_DEFAULT));\nif (!$zip->close()) {\n    exit('failed');\n}\n// check the ZIP file\n$zip = zip_open($tmpfile);\nif (!is_resource($zip)) {\n    exit('failed');\n}\nwhile ($e = zip_read($zip)) {\n    echo zip_entry_name($e) . ': ' . zip_entry_compressionmethod($e) . \"\\n\";\n}\nzip_close($zip);\n?>")).toMatchSnapshot();
  });
});
