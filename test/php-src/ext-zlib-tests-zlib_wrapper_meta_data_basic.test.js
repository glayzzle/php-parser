// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/zlib_wrapper_meta_data_basic.phpt
  it("Test function stream_get_meta_data on a zlib stream", function () {
    expect(parser.parseCode("<?php\necho \"no wrapper\\n\";\n$f = __DIR__.\"/004.txt.gz\";\n$h = gzopen($f,'r');\nvar_dump(stream_get_meta_data($h));\ngzclose($h);\necho \"\\nwith wrapper\\n\";\n$f = \"compress.zlib://\".__DIR__.\"/004.txt.gz\";\n$h = fopen($f,'r');\nvar_dump(stream_get_meta_data($h));\ngzclose($h);\n?>")).toMatchSnapshot();
  });
});
