// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/gzwrite_variation1.phpt
  it("Test function gzwrite() by calling it when file is opened for reading", function () {
    expect(parser.parseCode("<?php\n$filename = __DIR__.\"/004.txt.gz\";\n$h = gzopen($filename, 'r');\n$str = \"Here is the string to be written. \";\n$length = 10;\nvar_dump(gzwrite( $h, $str ) );\nvar_dump(gzread($h, 10));\nvar_dump(gzwrite( $h, $str, $length ) );\ngzclose($h);\n?>")).toMatchSnapshot();
  });
});
