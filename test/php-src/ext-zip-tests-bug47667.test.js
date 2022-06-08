// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/bug47667.phpt
  it("Bug #47667 (ZipArchive::OVERWRITE seems to have no effect)", function () {
    expect(parser.parseCode("<?php\n$thisdir = __DIR__;\n$filename = $thisdir . \"/bug47667.zip\";\n$zip = new ZipArchive();\nif ($zip->open($filename, ZipArchive::CREATE) !== true) {\n    exit(\"Unable to open the zip file\");\n} else {\n    $zip->addFromString('foo.txt', 'foo bar foobar');\n    $zip->close();\n}\nfor ($i = 0; $i < 10; $i++) {\n    $zip = new ZipArchive();\n    if ($zip->open($filename, ZipArchive::OVERWRITE) !== true) {\n        exit(\"Unable to open the zip file\");\n    }\n    $zip->addFromString(\"foo_{$i}.txt\", 'foo bar foobar');\n    $zip->close();\n}\n$zip = new ZipArchive();\nif ($zip->open($filename, ZipArchive::CREATE) !== true) {\n    exit(\"Unable to open the zip file\");\n}\necho \"files: \" , $zip->numFiles;\n$zip->close();\nunlink($filename);\n?>")).toMatchSnapshot();
  });
});
