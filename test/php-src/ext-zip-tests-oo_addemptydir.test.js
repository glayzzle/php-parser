// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/oo_addemptydir.phpt
  it("ziparchive::addEmptyDir", function () {
    expect(parser.parseCode("<?php\n$dirname = __DIR__ . '/';\ninclude $dirname . 'utils.inc';\n$file = $dirname . 'oo_addemptydir.zip';\ncopy($dirname . 'test.zip', $file);\n$zip = new ZipArchive;\nif (!$zip->open($file)) {\n    exit('failed');\n}\nvar_dump($zip->lastId); // -1 (nothing added)\n$zip->addEmptyDir('emptydir');\nvar_dump($zip->lastId); // 4\n$zip->addEmptyDir('emptydir');\nvar_dump($zip->lastId); // -1 (already exists)\n$zip->addEmptyDir('emptydir', ZipArchive::FL_OVERWRITE);\nvar_dump($zip->lastId); // 4\nif ($zip->status == ZIPARCHIVE::ER_OK) {\n    if (!verify_entries($zip, [\n        \"bar\",\n        \"foobar/\",\n        \"foobar/baz\",\n        \"entry1.txt\",\n        \"emptydir/\"\n    ])) {\n        echo \"failed\\n\";\n    } else {\n        echo \"OK\";\n    }\n    $zip->close();\n} else {\n    echo \"failed3\\n\";\n}\n@unlink($file);\n?>")).toMatchSnapshot();
  });
});
