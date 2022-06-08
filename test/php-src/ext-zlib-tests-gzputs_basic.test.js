// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/gzputs_basic.phpt
  it("Test function gzputs() by calling it with its expected arguments", function () {
    expect(parser.parseCode("<?php\n$filename = __DIR__.\"/gzputs_basic.txt.gz\";\n$h = gzopen($filename, 'w');\n$str = \"Here is the string to be written. \";\n$length = 10;\nvar_dump(gzputs( $h, $str ) );\nvar_dump(gzputs( $h, $str, $length ) );\ngzclose($h);\n$h = gzopen($filename, 'r');\ngzpassthru($h);\ngzclose($h);\necho \"\\n\";\nunlink($filename);\n?>")).toMatchSnapshot();
  });
});
