// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/zlib_wrapper_fstat_basic.phpt
  it("Test function fstat() on zlib wrapper", function () {
    expect(parser.parseCode("<?php\n$f = __DIR__.\"/004.txt.gz\";\n$h = gzopen($f, \"r\");\nvar_dump(fstat($h));\nfclose($h);\n?>")).toMatchSnapshot();
  });
});
