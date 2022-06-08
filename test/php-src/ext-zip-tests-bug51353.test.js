// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/bug51353.phpt
  it("Bug #51353 ZIP64 problem, archive with 100000 items", function () {
    expect(parser.parseCode("<?php\n/* This test might get very long depending on the mashine it's running on. Therefore\nadding an explicit skip, remove it to run this test. */\nset_time_limit(0);\n$base_path = __DIR__;\n/* Either we ship a file with 100000 entries which would be >12M big,\n    or create it dynamically. */\n$zip = new ZipArchive;\n$r = $zip->open(\"$base_path/51353.zip\", ZIPARCHIVE::CREATE | ZIPARCHIVE::OVERWRITE);\nif ($r) {\n    for ($i = 0; $i < 100000; $i++) {\n        $zip->addFromString(\"$i.txt\", '1');\n    }\n    $zip->close();\n} else {\n    die(\"failed\");\n}\n$zip = new ZipArchive;\n$r = $zip->open(\"$base_path/51353.zip\");\nif ($r) {\n    $zip->extractTo(\"$base_path/51353_unpack\");\n    $zip->close();\n    $a = glob(\"$base_path/51353_unpack/*.txt\");\n    echo count($a) . \"\\n\";\n} else {\n    die(\"failed\");\n}\necho \"OK\";")).toMatchSnapshot();
  });
});
