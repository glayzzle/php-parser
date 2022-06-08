// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/bug72660.phpt
  it("Bug #72660 (NULL Pointer dereference in zend_virtual_cwd)", function () {
    expect(parser.parseCode("<?php\n$zip = new ZipArchive();\n$zip->open(__DIR__ . \"/bug72660.zip\", ZIPARCHIVE::CREATE);\n$zip->addPattern(\"/noexists/\");\n?>\nokey")).toMatchSnapshot();
  });
});
