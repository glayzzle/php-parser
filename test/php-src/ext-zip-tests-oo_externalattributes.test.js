// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/oo_externalattributes.phpt
  it("ZipArchive::*ExternalAttributes*() function", function () {
    expect(parser.parseCode("<?php\n$name = __DIR__ . '/withattr.zip';\necho \"== Set\\n\";\n$zip = new ZipArchive;\n$r = $zip->open($name, ZIPARCHIVE::CREATE);\n$zip->addFromString('foo.txt', 'foo');\n$zip->addFromString('bar.txt', 'bar');\nvar_dump($zip->setExternalAttributesName('foo.txt', ZipArchive::OPSYS_UNIX, 123));\n$id = $zip->locateName('bar.txt');\nvar_dump($zip->setExternalAttributesIndex($id, ZipArchive::OPSYS_VFAT, 234));\n$zip->close();\necho \"== Get\\n\";\n$r = $zip->open($name);\nvar_dump($zip->getExternalAttributesName('foo.txt', $a, $b), $a, $b);\n$id = $zip->locateName('bar.txt');\nvar_dump($zip->getExternalAttributesIndex($id, $a, $b), $a, $b);\necho \"== Set\\n\";\nvar_dump($zip->setExternalAttributesName('foo.txt', ZipArchive::OPSYS_DOS, 345));\nvar_dump($zip->setExternalAttributesIndex($id, ZipArchive::OPSYS_AMIGA, 456));\necho \"== Get changed\\n\";\nvar_dump($zip->getExternalAttributesName('foo.txt', $a, $b), $a, $b);\nvar_dump($zip->getExternalAttributesIndex($id, $a, $b), $a, $b);\necho \"== Get unchanged\\n\";\nvar_dump($zip->getExternalAttributesName('foo.txt', $a, $b, ZipArchive::FL_UNCHANGED), $a, $b);\nvar_dump($zip->getExternalAttributesIndex($id, $a, $b, ZipArchive::FL_UNCHANGED), $a, $b);\n$zip->close();\n?>\n== Done")).toMatchSnapshot();
  });
});
