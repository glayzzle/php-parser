// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/oo_addfile.phpt
  it("ziparchive::addFile() function", function () {
    expect(parser.parseCode("<?php\n$dirname = __DIR__ . '/';\ninclude $dirname . 'utils.inc';\n$file = $dirname . 'oo_addfile.zip';\ncopy($dirname . 'test.zip', $file);\n$zip = new ZipArchive;\nif (!$zip->open($file)) {\n    exit('failed');\n}\nvar_dump($zip->lastId);\nif (!$zip->addFile($dirname . 'utils.inc', 'test.php')) {\n    echo \"failed\\n\";\n}\nvar_dump($zip->lastId);\nif (!$zip->addFile($dirname . 'utils.inc', 'mini.txt', 12, 34)) {\n    echo \"failed\\n\";\n}\nvar_dump($zip->lastId);\nif ($zip->status == ZIPARCHIVE::ER_OK) {\n    if (!verify_entries($zip, [\n        \"bar\",\n        \"foobar/\",\n        \"foobar/baz\",\n        \"entry1.txt\",\n        \"test.php\",\n        \"mini.txt\"\n    ])) {\n        echo \"failed\\n\";\n    } else {\n        echo \"OK\\n\";\n    }\n    $zip->close();\n} else {\n    echo \"failed\\n\";\n}\nif (!$zip->open($file)) {\n    exit('failed');\n}\nvar_dump(strlen($zip->getFromName('test.php')) == filesize($dirname . 'utils.inc'));\nvar_dump(strlen($zip->getFromName('mini.txt')) == 34);\n@unlink($file);\n?>")).toMatchSnapshot();
  });
});
