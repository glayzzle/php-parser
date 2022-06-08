// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/oo_progress.phpt
  it("registerProgressCallback", function () {
    expect(parser.parseCode("<?php\n$dirname = dirname(__FILE__) . '/';\n$file = $dirname . '__tmp_oo_progress.zip';\n@unlink($file);\n$zip = new ZipArchive;\nif (!$zip->open($file, ZIPARCHIVE::CREATE)) {\n    exit('failed');\n}\nvar_dump($zip->registerProgressCallback(0.5, function ($r) {\n    // Only check start/end as intermediate is not reliable\n    if ($r == 0.0) echo \"start\\n\";\n    if ($r == 1.0) echo \"end\\n\";\n}));\nvar_dump($zip->addFromString('foo', 'entry #1'));\nvar_dump($zip->close());\nunlink($file);\n?>\nDone")).toMatchSnapshot();
  });
});
