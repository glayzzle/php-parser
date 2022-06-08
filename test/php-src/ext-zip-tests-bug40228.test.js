// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/bug40228.phpt
  it("Bug #40228 (extractTo does not create recursive empty path)", function () {
    expect(parser.parseCode("<?php\n$dest = __DIR__ . \"/bug40228\";\n$arc_name = __DIR__ . \"/bug40228.zip\";\n$zip = new ZipArchive;\n$zip->open($arc_name, ZIPARCHIVE::CREATE);\n$zip->extractTo($dest);\nif (is_dir($dest . '/test/empty')) {\n    echo \"Ok\\n\";\n    rmdir($dest . '/test/empty');\n    rmdir($dest . '/test');\n    rmdir($dest);\n} else {\n    echo \"Failed.\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
