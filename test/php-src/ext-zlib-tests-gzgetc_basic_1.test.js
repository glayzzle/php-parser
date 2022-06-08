// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/gzgetc_basic_1.phpt
  it("Test function gzgetc() by calling it with its expected arguments zlib 1.2.7", function () {
    expect(parser.parseCode("<?php\n// note that gzgets is an alias to fgets. parameter checking tests will be\n// the same as gzgets\n$f = __DIR__.\"/004.txt.gz\";\n$h = gzopen($f, 'r');\nif ($h) {\n    $count = 0;\n    while (($c = fgetc( $h )) !== false) {\n       $count++;\n       echo $c;\n    }\n    echo \"\\ncharacters counted=$count\\n\";\n    gzclose($h);\n}\n?>")).toMatchSnapshot();
  });
});
