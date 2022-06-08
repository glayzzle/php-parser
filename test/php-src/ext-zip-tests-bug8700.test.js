// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/bug8700.phpt
  it("Bug #8700 (getFromIndex(0) fails)", function () {
    expect(parser.parseCode("<?php\n$thisdir = __DIR__;\n$filename = $thisdir . \"/bug8009.zip\";\n$zip = new ZipArchive();\nif ($zip->open($filename) === FALSE) {\n       exit(\"cannot open $filename\\n\");\n}\n$contents_from_idx = $zip->getFromIndex(0);\n$contents_from_name = $zip->getFromName('1.txt');\nif ($contents_from_idx != $contents_from_name) {\n    echo \"failed:\";\n    var_dump($content_from_idx, $content_from_name);\n}\n$zip->close();\necho \"status: \" . $zip->status . \"\\n\";\necho \"\\n\";\n?>")).toMatchSnapshot();
  });
});
