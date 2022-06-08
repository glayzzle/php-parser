// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/zlib_scheme_copy_variation1.phpt
  it("Test compress.zlib:// scheme with the copy function: compressed to uncompressed", function () {
    expect(parser.parseCode("<?php\n$inputFileName = __DIR__.\"/004.txt.gz\";\n$outputFileName = __FILE__.'.tmp';\n$srcFile = \"compress.zlib://$inputFileName\";\n$destFile = $outputFileName;\ncopy($srcFile, $destFile);\n$h = gzopen($inputFileName, 'r');\n$org_data = gzread($h, 4096);\ngzclose($h);\n// can only read uncompressed data\n$h = fopen($outputFileName, 'r');\n$copied_data = fread($h, 4096);\ngzclose($h);\nif ($org_data == $copied_data) {\n   echo \"OK: Copy identical\\n\";\n}\nelse {\n   echo \"FAILED: Copy not identical\";\n}\nunlink($outputFileName);\n?>")).toMatchSnapshot();
  });
});
