// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/createfromwbmp2_extern.phpt
  it("imagecreatefromwbmp with invalid wbmp", function () {
    expect(parser.parseCode("<?php\n$filename = __DIR__ . '/_tmp.wbmp';\n$fp = fopen($filename,\"wb\");\nif (!$fp) {\n    exit(\"Failed to create <$filename>\");\n}\n//write header\n$c = 0;\nfputs($fp, chr($c), 1);\nfputs($fp, $c, 1);\n//write width = 2^32 / 4 + 1\n$c = 0x84;\nfputs($fp, chr($c), 1);\n$c = 0x80;\nfputs($fp, chr($c), 1);\nfputs($fp, chr($c), 1);\nfputs($fp, chr($c), 1);\n$c = 0x01;\nfputs($fp, chr($c), 1);\n/*write height = 4*/\n$c = 0x04;\nfputs($fp, chr($c), 1);\n/*write some data to cause overflow*/\nfor ($i=0; $i<10000; $i++) {\n    fwrite($fp, chr($c), 1);\n}\nfclose($fp);\n$im = imagecreatefromwbmp($filename);\nunlink($filename);\n?>")).toMatchSnapshot();
  });
});
