// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/bug81420.phpt
  it("Bug #81420 (ZipArchive::extractTo extracts outside of destination)", function () {
    expect(parser.parseCode("<?php\n$zip = new ZipArchive();\n$zip->open(__DIR__ . \"/bug81420.zip\");\n$destination = __DIR__ . \"/bug81420\";\nmkdir($destination);\n$zip->extractTo($destination);\nvar_dump(file_exists(\"$destination/nt1/zzr_noharm.php\"));\n?>")).toMatchSnapshot();
  });
});
