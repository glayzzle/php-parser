// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/zlib_scheme_copy_variation2.phpt
  it("Test compress.zlib:// scheme with the copy function: uncompressed to compressed", function () {
    expect(parser.parseCode("<?php\n$org_data = <<<EOT\nuncompressed contents of 004.txt.gz is:\nWhen you're taught through feelings\nDestiny flying high above\nall I know is that you can realize it\nDestiny who cares\nas it turns around\nand I know that it descends down on me\nEOT;\n$inputFileName = __FILE__.'.org';\n$outputFileName = __FILE__.'.tmp';\nfile_put_contents($inputFileName, $org_data);\n$srcFile = $inputFileName;\n$destFile = \"compress.zlib://$outputFileName\";\ncopy($srcFile, $destFile);\n$h = gzopen($outputFileName, 'r');\n$copied_data = gzread($h, 4096);\ngzclose($h);\n//gzopen can read compressed and uncompressed so we\n//also need to look for the magic number (x1f x8b) to prove it\n//was compressed.\n$h = fopen($outputFileName, 'r');\n$magic = fread($h, 2);\nfclose($h);\nif ($org_data == $copied_data && bin2hex($magic) === '1f8b') {\n   echo \"OK: Copy identical\\n\";\n}\nelse {\n   echo \"FAILED: Copy not identical\\n\";\n}\nunlink($inputFileName);\nunlink($outputFileName);\n?>")).toMatchSnapshot();
  });
});
