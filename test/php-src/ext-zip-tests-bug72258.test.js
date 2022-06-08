// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/bug72258.phpt
  it("Bug #72258 ZipArchive converts filenames to unrecoverable form", function () {
    expect(parser.parseCode("<?php\n$fn = __DIR__ . DIRECTORY_SEPARATOR . \"bug72258.zip\";\n$zip = new \\ZipArchive();\n$res = $zip->open($fn);\nif ($res !== true) {\n        echo 'Error opening: ' . $res;\n            die();\n}\nfor ($i = 0; $i < $zip->numFiles; $i++) {\n    $fnInArc = $zip->getNameIndex($i, ZipArchive::FL_ENC_RAW);\n    var_dump($fnInArc);\n}\n?>")).toMatchSnapshot();
  });
});
