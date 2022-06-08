// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/bug64342_1-mb.phpt
  it("Bug #64342 ZipArchive::addFile() has to check file existence (variation 2)", function () {
    expect(parser.parseCode("<?php\n$dirname = __DIR__ . '/';\ninclude $dirname . 'utils.inc';\n$file = $dirname . '__私はガラスを食べられますtmp_oo_addfile.zip';\ncopy($dirname . 'test.zip', $file);\n$zip = new ZipArchive;\nif (!$zip->open($file)) {\n    exit('failed');\n}\nif (!$zip->addFile($dirname . 'cant_find_me.txt', 'test.php')) {\n    echo \"failed\\n\";\n}\nif ($zip->status == ZIPARCHIVE::ER_OK) {\n    if (!verify_entries($zip, [\n        \"bar\",\n        \"foobar/\",\n        \"foobar/baz\",\n        \"entry1.txt\"\n    ])) {\n        echo \"failed\\n\";\n    } else {\n        echo \"OK\";\n    }\n    $zip->close();\n} else {\n    echo \"failed\\n\";\n}\n@unlink($file);\n?>")).toMatchSnapshot();
  });
});
