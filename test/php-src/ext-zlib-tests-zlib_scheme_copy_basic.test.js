// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/zlib_scheme_copy_basic.phpt
  it("Test compress.zlib:// scheme with the copy function: compressed to compressed", function () {
    expect(parser.parseCode("<?php\n$inputFileName = __DIR__.\"/004.txt.gz\";\n$outputFileName = __FILE__.'.tmp';\n$srcFile = \"compress.zlib://$inputFileName\";\n$destFile = \"compress.zlib://$outputFileName\";\ncopy($srcFile, $destFile);\n$h = gzopen($inputFileName, 'r');\n$org_data = gzread($h, 4096);\ngzclose($h);\n$h = gzopen($outputFileName, 'r');\n$copied_data = gzread($h, 4096);\ngzclose($h);\nif ($org_data == $copied_data) {\n   echo \"OK: Copy identical\\n\";\n}\nelse {\n   echo \"FAILED: Copy not identical\";\n}\nunlink($outputFileName);\n?>")).toMatchSnapshot();
  });
});
