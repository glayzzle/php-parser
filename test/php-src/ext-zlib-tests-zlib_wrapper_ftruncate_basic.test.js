// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/zlib_wrapper_ftruncate_basic.phpt
  it("Test function ftruncate() on zlib wrapper by calling it with its expected arguments", function () {
    expect(parser.parseCode("<?php\n$f = __DIR__.\"/004.txt.gz\";\n$f2 = \"zlib_wrapper_ftruncate_basic.txt.gz\";\ncopy($f, $f2);\n$h = gzopen($f2, \"r\");\nftruncate($h, 20);\nfclose($h);\nunlink($f2);\n$h = gzopen($f2, \"w\");\nftruncate($h, 20);\nfclose($h);\nunlink($f2);\n?>")).toMatchSnapshot();
  });
});
