// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/oo_rename.phpt
  it("Rename entries", function () {
    expect(parser.parseCode("<?php\n$dirname = __DIR__ . '/';\ninclude $dirname . 'utils.inc';\n$file = $dirname . 'oo_rename.zip';\n@unlink($file);\n$zip = new ZipArchive;\nif (!$zip->open($file, ZIPARCHIVE::CREATE)) {\n    exit('failed');\n}\n$zip->addFromString('entry1.txt', 'entry #1');\n$zip->addFromString('entry2.txt', 'entry #2');\n$zip->addFromString('dir/entry2.txt', 'entry #2');\nif (!$zip->status == ZIPARCHIVE::ER_OK) {\n    var_dump($zip);\n    echo \"failed2\\n\";\n}\n$zip->close();\nif (!$zip->open($file)) {\n    exit('failed3');\n}\nif (!verify_entries($zip, [\n    \"entry1.txt\",\n    \"entry2.txt\",\n    \"dir/entry2.txt\"\n])) {\n    exit(\"failed4\");\n} else {\n    echo \"OK\\n\";\n}\nif (!$zip->renameIndex(0, 'ren_entry1.txt')) {\n    echo \"failed index 0\\n\";\n}\nif (!$zip->renameName('dir/entry2.txt', 'dir3/ren_entry2.txt')) {\n    echo \"failed name dir/entry2.txt\\n\";\n}\nif (!verify_entries($zip, [\n    \"ren_entry1.txt\",\n    \"entry2.txt\",\n    \"dir3/ren_entry2.txt\"\n])) {\n    exit(\"failed5\");\n} else {\n    echo \"OK\\n\";\n}\n$zip->close();\n@unlink($file);\n?>")).toMatchSnapshot();
  });
});
