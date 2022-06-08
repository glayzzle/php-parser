// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/oo_open.phpt
  it("zip::open() function", function () {
    expect(parser.parseCode("<?php\n$dirname = __DIR__ . '/';\n$zip = new ZipArchive;\n$r = $zip->open($dirname . 'nofile');\nif ($r !== TRUE) {\n    echo \"ER_OPEN: ok\\n\";\n} else {\n    echo \"ER_OPEN: FAILED\\n\";\n}\n$r = $zip->open($dirname . 'nofile', ZIPARCHIVE::CREATE);\nif (!$r) {\n    echo \"create: failed\\n\";\n} else {\n    echo \"create: ok\\n\";\n}\n@unlink($dirname . 'nofile');\n$zip = new ZipArchive;\ntry {\n    $zip->open('');\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nif (!$zip->open($dirname . 'test.zip')) {\n    exit(\"failed 1\\n\");\n}\nif ($zip->status == ZIPARCHIVE::ER_OK) {\n    echo \"OK\\n\";\n} else {\n    echo \"failed\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
