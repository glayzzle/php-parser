// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/gzread_basic.phpt
  it("Test function gzread() by calling it with its expected arguments", function () {
    expect(parser.parseCode("<?php\n// note that gzread is an alias to fread. parameter checking tests will be\n// the same as fread\n$f = __DIR__.\"/004.txt.gz\";\n$h = gzopen($f, 'r');\n$lengths = array(10, 14, 7, 99, 2000);\nforeach ($lengths as $length) {\n   var_dump(gzread( $h, $length ) );\n}\ngzclose($h);\n?>")).toMatchSnapshot();
  });
});
