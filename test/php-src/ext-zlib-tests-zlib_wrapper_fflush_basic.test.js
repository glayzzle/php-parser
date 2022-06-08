// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/zlib_wrapper_fflush_basic.phpt
  it("Test function fflush() on a zlib stream wrapper", function () {
    expect(parser.parseCode("<?php\n$filename = \"zlib_wrapper_fflush_basic.txt.gz\";\n$h = gzopen($filename, 'w');\n$str = \"Here is the string to be written.\";\n$length = 10;\nvar_dump(fflush($h));\ngzwrite( $h, $str);\ngzwrite( $h, $str);\nvar_dump(fflush($h));\ngzclose($h);\n$h = gzopen($filename, 'r');\ngzpassthru($h);\ngzclose($h);\necho \"\\n\";\nunlink($filename);\n?>")).toMatchSnapshot();
  });
});
