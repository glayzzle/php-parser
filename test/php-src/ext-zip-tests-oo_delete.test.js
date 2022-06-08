// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/oo_delete.phpt
  it("Delete entries", function () {
    expect(parser.parseCode("<?php\n$dirname = __DIR__ . '/';\n$file = $dirname . 'oo_delete.zip';\nif (file_exists($file)) {\n    unlink($file);\n}\n$zip = new ZipArchive;\nif (!$zip->open($file, ZIPARCHIVE::CREATE)) {\n    exit('failed');\n}\n$zip->addFromString('entry1.txt', 'entry #1');\n$zip->addFromString('entry2.txt', 'entry #2');\n$zip->addFromString('dir/entry2.txt', 'entry #2');\nif ($zip->status == ZIPARCHIVE::ER_OK) {\n    $zip->close();\n    echo \"ok\\n\";\n} else {\n    var_dump($zip);\n    echo \"failed\\n\";\n}\nif (!$zip->open($file, ZIPARCHIVE::CREATE)) {\n    exit('failed');\n}\nif ($zip->deleteIndex(0)) {\n    echo \"ok\\n\";\n}\nif ($zip->deleteName('entry2.txt')) {\n    echo \"ok\\n\";\n} else {\n    echo \"failed 3\\n\";\n}\nif ($zip->deleteName('dir/entry2.txt')) {\n    echo \"ok\\n\";\n} else {\n    echo \"failed 3\\n\";\n}\nif (!$zip->deleteIndex(123)) {\n    echo \"ok\\n\";\n} else {\n    print_r($zip);\n    echo \"failed\\n\";\n}\n$sb = $zip->statIndex(0);\nvar_dump($sb);\n$sb = $zip->statIndex(1);\nvar_dump($sb);\n$sb = $zip->statIndex(2);\nvar_dump($sb);\n// suppress irrelevant error message:\n@$zip->close();\nunset($zip);\nif (file_exists($file)) {\n    unlink($file);\n}\n?>")).toMatchSnapshot();
  });
});
