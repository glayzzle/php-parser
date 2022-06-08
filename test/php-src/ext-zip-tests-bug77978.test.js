// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/bug77978.phpt
  it("Bug #77978 (Dirname ending in colon unzips to wrong dir)", function () {
    expect(parser.parseCode("<?php\n$file = __DIR__ . \"/bug77978.zip\";\n$target = __DIR__ . \"/bug77978\";\nmkdir($target);\n$zip = new ZipArchive();\n$zip->open($file, ZipArchive::CREATE|ZipArchive::OVERWRITE);\n$zip->addFromString(\"dir/test:/filename.txt\", \"contents\");\n$zip->close();\n$zip->open($file);\n// Windows won't extract filenames with colons; we suppress the warning\n@$zip->extractTo($target, \"dir/test:/filename.txt\");\n$zip->close();\nvar_dump(!file_exists(\"$target/filename.txt\"));\nvar_dump(PHP_OS_FAMILY === \"Windows\" || file_exists(\"$target/dir/test:/filename.txt\"));\n?>")).toMatchSnapshot();
  });
});
