// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/gztell_basic.phpt
  it("Test function gztell() by calling it with its expected arguments when reading", function () {
    expect(parser.parseCode("<?php\n$f = __DIR__.\"/004.txt.gz\";\n$h = gzopen($f, 'r');\n$intervals = array(7, 22, 54, 17, 27, 15, 1000);\n// tell should be 7, 29, 83, 100, 127, 142, 176 (176 is length of uncompressed file)\nvar_dump(gztell($h));\nforeach ($intervals as $interval) {\n   gzread($h, $interval);\n   var_dump(gztell($h));\n}\ngzclose($h);\n?>")).toMatchSnapshot();
  });
});
