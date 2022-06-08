// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/gzopen_variation8.phpt
  it("Test gzopen() function : variation: opening a plain file", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing gzopen() : variation ***\\n\";\n$data = <<<EOT\nHere is some plain\ntext to be read\nand displayed.\nEOT;\n$file = \"gzopen_variation8.tmp\";\n$h = fopen($file, 'w');\nfwrite($h, $data);\nfclose($h);\n$h = gzopen($file, 'r');\ngzpassthru($h);\ngzclose($h);\necho \"\\n\";\nunlink($file);\n?>")).toMatchSnapshot();
  });
});
