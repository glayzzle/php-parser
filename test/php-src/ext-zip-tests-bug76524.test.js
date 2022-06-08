// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/bug76524.phpt
  it("ZipArchive Bug #76524 (memory leak with ZipArchive::OVERWRITE flag and empty archive)", function () {
    expect(parser.parseCode("<?php\n$i = 0;\ndo {\n    $filename = __DIR__ . \"/nonexistent\" . ($i++) . \".zip\";\n} while (file_exists($filename));\n$zip = new ZipArchive();\n$zip->open($filename, ZipArchive::CREATE | ZipArchive::OVERWRITE);\necho 'ok';\n/* Zip-related error messages depend on platform and libzip version,\n   so the regex is used to check that Zend MM does NOT show warnings\n   about leaks: */\n?>")).toMatchSnapshot();
  });
});
