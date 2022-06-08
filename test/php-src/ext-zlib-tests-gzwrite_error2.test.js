// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/gzwrite_error2.phpt
  it("Test function gzwrite() by calling it invalid lengths", function () {
    expect(parser.parseCode("<?php\n$filename = \"gzwrite_error2.txt.gz\";\n$h = gzopen($filename, 'w');\n$str = \"Here is the string to be written. \";\nvar_dump(gzwrite( $h, $str, 0 ) );\nvar_dump(gzwrite( $h, $str, -1 ) );\ngzclose($h);\n$h = gzopen($filename, 'r');\ngzpassthru($h);\ngzclose($h);\necho \"\\n\";\nunlink($filename);\n?>")).toMatchSnapshot();
  });
});
