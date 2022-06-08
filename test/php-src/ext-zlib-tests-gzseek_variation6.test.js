// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/gzseek_variation6.phpt
  it("Test function gzseek() by calling it with SEEK_END when reading", function () {
    expect(parser.parseCode("<?php\n$f = __DIR__.\"/004.txt.gz\";\n$h = gzopen($f, 'r');\n// move 40 bytes\necho \"move 40 bytes\\n\";\ngzread($h, 40);\necho \"tell=\";\nvar_dump(gztell($h));\necho \"move to the end\\n\";\nvar_dump(gzseek( $h, 0, SEEK_END ) );\necho \"tell=\";\nvar_dump(gztell($h));\necho \"eof=\";\nvar_dump(gzeof($h));\n//read the next 10\nvar_dump(gzread($h, 10));\ngzclose($h);\n?>")).toMatchSnapshot();
  });
});
