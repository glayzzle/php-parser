// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/oo_replacefile.phpt
  it("ziparchive::replaceFile() function", function () {
    expect(parser.parseCode("<?php\n$dirname = __DIR__ . '/';\ninclude $dirname . 'utils.inc';\n$file = $dirname . 'oo_replacefile.zip';\ncopy($dirname . 'test.zip', $file);\n$zip = new ZipArchive;\nif (!$zip->open($file)) {\n    exit('open failed');\n}\nif ($zip->replaceFile($dirname . 'utils.inc', 5)) {\n    echo \"replace 5 succeed\\n\";\n}\nif (!$zip->replaceFile($dirname . 'utils.inc', 0)) {\n    echo \"replace 0 failed\\n\";\n}\nif (!$zip->replaceFile($dirname . 'utils.inc', 2, 12, 42)) {\n    echo \"replace 2 failed\\n\";\n}\nif ($zip->status == ZIPARCHIVE::ER_OK) {\n    if (!verify_entries($zip, [\n        \"bar\",\n        \"foobar/\",\n        \"foobar/baz\",\n        \"entry1.txt\",\n    ])) {\n        echo \"verify failed\\n\";\n    } else {\n        echo \"OK\\n\";\n    }\n    $zip->close();\n} else {\n    echo \"failed\\n\";\n}\nif (!$zip->open($file)) {\n    exit('re-open failed');\n}\nvar_dump(strlen($zip->getFromName('bar')) == filesize($dirname . 'utils.inc'));\nvar_dump(strlen($zip->getFromName('foobar/baz')) == 42);\n@unlink($file);\n?>")).toMatchSnapshot();
  });
});
