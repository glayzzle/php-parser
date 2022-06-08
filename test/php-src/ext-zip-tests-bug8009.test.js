// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/bug8009.phpt
  it("Bug #8009 (cannot add again same entry to an archive)", function () {
    expect(parser.parseCode("<?php\n$thisdir = __DIR__;\n$src = $thisdir . \"/bug8009.zip\";\n$filename = $thisdir . \"/tmp8009.zip\";\ncopy($src, $filename);\n$zip = new ZipArchive();\nif (!$zip->open($filename)) {\n       exit(\"cannot open $filename\\n\");\n}\n$zip->addFromString(\"2.txt\", \"=)\");\n$zip->close();\nunlink($filename);\necho \"status: \" . $zip->status . \"\\n\";\necho \"\\n\";\n?>")).toMatchSnapshot();
  });
});
