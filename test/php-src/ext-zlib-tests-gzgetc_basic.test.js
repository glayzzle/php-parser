// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/gzgetc_basic.phpt
  it("Test function gzgetc() by calling it with its expected arguments zlib 1.2.5", function () {
    expect(parser.parseCode("<?php\n// note that gzgets is an alias to fgets. parameter checking tests will be\n// the same as gzgets\n$f = __DIR__.\"/004.txt.gz\";\n$h = gzopen($f, 'r');\n$count = 0;\nwhile (gzeof($h) === false) {\n   $count++;\n   echo fgetc( $h );\n}\necho \"\\ncharacters counted=$count\\n\";\ngzclose($h);\n?>")).toMatchSnapshot();
  });
});
