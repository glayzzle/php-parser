// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/oo_close.phpt
  it("zip::close() function", function () {
    expect(parser.parseCode("<?php\n$dirname = __DIR__ . '/';\n$zip = new ZipArchive;\nif (!$zip->open($dirname . 'test.zip')) {\n    exit('failed');\n}\nif ($zip->status == ZIPARCHIVE::ER_OK) {\n    $zip->close();\n    echo \"ok\\n\";\n} else {\n    echo \"failed\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
