// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/oo_getexternalattributesname_error.phpt
  it("ZipArchive::getExternalAttributesName() throws a ValueError when the $name param is empty", function () {
    expect(parser.parseCode("<?php\n$zip = new ZipArchive();\n$dirname = __DIR__ . '/';\n$zip->open($dirname . \"test.zip\", ZIPARCHIVE::CREATE);\n$a = ZipArchive::OPSYS_DEFAULT;\n$b = ZipArchive::OPSYS_DEFAULT;\ntry {\n    $zip->getExternalAttributesName(\"\", $a, $b);\n} catch(ValueError $e) {\n    echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
