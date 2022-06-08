// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/oo_namelocate.phpt
  it("Locate entries by name", function () {
    expect(parser.parseCode("<?php\n$dirname = __DIR__ . '/';\ninclude $dirname . 'utils.inc';\n$file = $dirname . 'oo_namelocate.zip';\n@unlink($file);\n$zip = new ZipArchive;\nif (!$zip->open($file, ZIPARCHIVE::CREATE)) {\n    exit('failed');\n}\n$zip->addFromString('entry1.txt', 'entry #1');\n$zip->addFromString('entry2.txt', 'entry #2');\n$zip->addFromString('dir/entry2d.txt', 'entry #2');\nif (!$zip->status == ZIPARCHIVE::ER_OK) {\n    echo \"failed to write zip\\n\";\n}\n$zip->close();\nif (!$zip->open($file)) {\n    exit('failed');\n}\nvar_dump($zip->locateName('entry1.txt'));\nvar_dump($zip->locateName('eNtry2.txt'));\nvar_dump($zip->locateName('eNtry2.txt', ZIPARCHIVE::FL_NOCASE));\nvar_dump($zip->locateName('enTRy2d.txt', ZIPARCHIVE::FL_NOCASE|ZIPARCHIVE::FL_NODIR));\n$zip->close();\n?>")).toMatchSnapshot();
  });
});
