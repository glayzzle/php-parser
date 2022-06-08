// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/bug78641.phpt
  it("Bug #78641 (addGlob can modify given remove_path value)", function () {
    expect(parser.parseCode("<?php\ndefine(\"TMPDIR\", __DIR__ . \"/\");\n$file = TMPDIR . 'bug78641';\ntouch($file);\n$zip = new ZipArchive();\n$zip->open(TMPDIR . \"bug78641.zip\", ZipArchive::CREATE | ZipArchive::OVERWRITE);\nvar_dump(basename(TMPDIR));\n$zip->addGlob($file, 0, [\"remove_path\" => TMPDIR]);\nvar_dump(basename(TMPDIR));\n$zip->close();\n?>")).toMatchSnapshot();
  });
});
