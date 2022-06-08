// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/zlib_wrapper_flock_basic.phpt
  it("Test function stream_get_meta_data on a zlib stream", function () {
    expect(parser.parseCode("<?php\n$f = __DIR__.\"/004.txt.gz\";\n$h = gzopen($f,'r');\nvar_dump(flock($h, LOCK_SH));\ngzclose($h);\n?>")).toMatchSnapshot();
  });
});
