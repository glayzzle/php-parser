// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/oo_cancel.phpt
  it("registerCancelCallback", function () {
    expect(parser.parseCode("<?php\n$dirname = dirname(__FILE__) . '/';\n$file = $dirname . '__tmp_oo_progress.zip';\n@unlink($file);\n$zip = new ZipArchive;\nif (!$zip->open($file, ZIPARCHIVE::CREATE)) {\n    exit('failed');\n}\nvar_dump($zip->registerCancelCallback(function () {\n    // Always cancel\n    return -1;\n}));\nvar_dump($zip->addFromString(PHP_BINARY, 'entry #1'));\nvar_dump($zip->close());\nvar_dump($zip->status == ZipArchive::ER_CANCELLED);\nvar_dump($zip->getStatusString());\n@unlink($file);\n?>\nDone")).toMatchSnapshot();
  });
});
