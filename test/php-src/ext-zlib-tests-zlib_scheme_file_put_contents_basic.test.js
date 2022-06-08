// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/zlib_scheme_file_put_contents_basic.phpt
  it("Test compress.zlib:// scheme with the file_get_contents", function () {
    expect(parser.parseCode("<?php\n$outputFileName = __FILE__.'tmp';\n$outFile = \"compress.zlib://$outputFileName\";\n$data = <<<EOT\nHere is some plain\ntext to be read\nand displayed.\nEOT;\nfile_put_contents($outFile, $data);\n$h = gzopen($outputFileName, 'r');\ngzpassthru($h);\ngzclose($h);\necho \"\\n\";\nunlink($outputFileName);\n?>")).toMatchSnapshot();
  });
});
