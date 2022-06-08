// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/bug80863.phpt
  it("Bug #80863 (ZipArchive::extractTo() ignores references)", function () {
    expect(parser.parseCode("<?php\n$archive = __DIR__ . \"/bug80863.zip\";\n$zip = new ZipArchive();\n$zip->open($archive, ZipArchive::CREATE | ZipArchive::OVERWRITE);\n$zip->addFromString(\"file1.txt\", \"contents\");\n$zip->addFromString(\"file2.txt\", \"contents\");\n$zip->close();\n$target = __DIR__ . \"/bug80683\";\nmkdir($target);\n$files = [\n    \"file1.txt\",\n    \"file2.txt\",\n];\n// turn into references\nforeach ($files as &$file);\n$zip = new ZipArchive();\n$zip->open($archive);\n$zip->extractTo($target, $files);\nvar_dump(is_file(\"$target/file1.txt\"));\nvar_dump(is_file(\"$target/file2.txt\"));\n?>")).toMatchSnapshot();
  });
});
