// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/gzgets_basic.phpt
  it("Test function gzgets() by calling it with its expected arguments", function () {
    expect(parser.parseCode("<?php\n// note that gzgets is an alias to fgets. parameter checking tests will be\n// the same as fgets\n$f = __DIR__.\"/004.txt.gz\";\n$h = gzopen($f, 'r');\n$lengths = array(10, 14, 7, 99);\nforeach ($lengths as $length) {\n   var_dump(gzgets( $h, $length ) );\n}\nwhile (gzeof($h) === false) {\n   var_dump(gzgets($h));\n}\ngzclose($h);\n?>")).toMatchSnapshot();
  });
});
