// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/oo_add_encoding.phpt
  it("ziparchive::addEmptyDir with encoding option", function () {
    expect(parser.parseCode("<?php\ninclude __DIR__ . '/utils.inc';\n$dirname = __DIR__ . '/oo_add_encoding_dir/';\n$file = $dirname . 'tmp.zip';\n@mkdir($dirname);\n$zip = new ZipArchive;\nif (!$zip->open($file, ZipArchive::CREATE)) {\n    exit('failed');\n}\n$zip->addEmptyDir('foo');\n$zip->addEmptyDir(chr(0x82), ZipArchive::FL_ENC_CP437);\n$zip->addEmptyDir('è', ZipArchive::FL_ENC_UTF_8);\n$zip->addFromString('bar', __FILE__);\n$zip->addFromString(chr(0x91), __FILE__, ZipArchive::FL_ENC_CP437);\n$zip->addFromString('€', __FILE__, ZipArchive::FL_ENC_UTF_8);\nif ($zip->status == ZIPARCHIVE::ER_OK) {\n    dump_entries_name($zip);\n    $zip->close();\n} else {\n    echo \"failed\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
